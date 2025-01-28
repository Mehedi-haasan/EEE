const express = require('express');
const bodyParser = require("body-parser");
const SSLCommerzPayment = require('sslcommerz-lts');
const cors = require('cors');
const app = express();
const port = 8050;

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000', 'http://localhost:3001'],
        methods: ['GET', 'POST'],
        credentials: true
    }
});


const store_id = 'qubic66e072f1d9e9d';
const store_passwd = 'qubic66e072f1d9e9d@ssl';
const is_live = false; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
};

app.use(cors(corsOptions));
app.use('/uploads', express.static('uploads'));

const db = require("./models");
require('./routes/user.routes')(app);
require('./routes/ProductTemplate.routes')(app);
require('./routes/company.routes')(app);
require('./routes/imageupload.routes')(app);
require('./routes/payment.routes')(app);
require('./routes/message.routes')(app);
require('./routes/order.routes')(app);

const Role = db.role;

// db.sequelize.sync({ force: true }).then(async () => {
//     // await initStates();
//     // await initUserRoles();
//     // await initCarousel();
//     // await initCategories();
//     // await initProductAttributes();
//     // await initProductAttributeValues();
// });


const DB = require('./models');
const Message = DB.message;

const socketUserMap = new Map(); 
const userSocketMap = new Map(); 

io.on('connection', (socket) => {
   

    socket.on('login', (userId) => {
        socketUserMap.set(socket.id, userId);
        userSocketMap.set(userId, socket.id);
    });

    socket.on('logout', () => {
        const userId = socketUserMap.get(socket.id);
        if (userId) {
            userSocketMap.delete(userId);
            socketUserMap.delete(socket.id);
        }
    });

    socket.on('create-message', async (data, callback) => {
        const { senderId, recieverId, message } = data;


        try {
            await Message.create({ senderId, recieverId, message });

            const receiverSocketId = userSocketMap.get(recieverId);
            if (receiverSocketId) {
                io.to(receiverSocketId).emit('receive-message', { senderId, message });
            }

            callback({ status: 'success', message: 'Message sent successfully' });
        } catch (error) {
            console.error('Error saving message:', error);
            callback({ status: 'error', message: 'Could not save message' });
        }
    });

    socket.on('disconnect', () => {
        const userId = socketUserMap.get(socket.id);
        if (userId) {
            userSocketMap.delete(userId);
            socketUserMap.delete(socket.id);
        }
    });
});

server.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});
