module.exports = (sequelize, Sequelize) => {
    const saleorder = sequelize.define("saleorder", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        active: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        invoice_id: {
            type: Sequelize.INTEGER,
        },
        product_id: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.INTEGER,
        },
        qty: {
            type: Sequelize.INTEGER,
        },
        contact: {
            type: Sequelize.STRING
        },
    });

    return saleorder;
};
