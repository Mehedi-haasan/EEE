const db = require("../models");
const SaleOrder = db.saleorder;
const ProductTemplate = db.productTemplete;
const Op = db.Sequelize.Op;



exports.getOrder = async (req, res) => {

    try {
        let data = await SaleOrder.findAll({
            limit: 10,
            where: {
                invoice_id: req.params.id
            },
            include: [
                {
                    model: ProductTemplate,
                }
            ]
        })
        res.status(200).send({
            success: true,
            items: data
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}


const UpdateProduct = async (orders) => {
    const updateProducts = orders

    if (!Array.isArray(updateProducts) || updateProducts.length === 0) {
        return 0
    }

    try {
        const Products = [];

        for (const pro of updateProducts) {
            const product = await ProductTemplate.findOne({
                where: { id: pro?.product_id },
            });

            if (product) {
                await ProductTemplate.update(
                    {
                        qty: parseInt(product?.qty) - parseInt(pro?.qty),
                    },
                    {
                        where: {
                            id: product?.id,
                        },
                    }
                );

            } else {
                console.log(`Product with ID ${pro?.id} not found`);
            }
        }

        return Products
    } catch (error) {
        return error
    }
};


exports.CreateOrder = async (req, res) => {
    try {
        const orders = req.body;
        await SaleOrder.bulkCreate(orders);
        const data = await UpdateProduct(orders)
        res.status(200).send({
            success: true,
            message: "Order Create Successfull",
            data: data

        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}


exports.getTodaysOrder = async (req, res) => {
    try {
        let data = await SaleOrder.findAll({})
        res.status(200).send({
            success: true,
            items: data
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

exports.getLastWeekOrder = async (req, res) => {
    try {
        let data = await SaleOrder.findAll({})
        res.status(200).send({
            success: true,
            items: data
        })

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}


