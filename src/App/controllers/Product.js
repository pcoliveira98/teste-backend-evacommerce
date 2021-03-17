const productModel = require('../models/Product');
const imageModel = require('../models/Image');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;

        const products = await productModel.findAll({
            where: { user_id: req.userId },
            order: ['id'],
            attributes: ['id', 'name', 'description', 'price'],
            limit: 10,
            offset: (page - 1) * 10,
            include: [{
                model: imageModel,
                as: 'images',
                attributes: ['id', 'path', 'url', 'product_id']
            }]
        });

        return res.json(products);
    },

    async store(req, res) {
        req.body.user_id = req.userId;

        const product = await productModel.create(req.body);

        if (req.files) {
            req.files.forEach(async file => {
                const { originalname: name, filename: path } = file;

                const picture = await imageModel.create({
                    name,
                    path,
                    product_id: product.id
                });

            });
        }

        return res.json(product);
    },

    async delete(req, res) {
        const product = await productModel.findByPk(req.params.id);

        if (!product) {
            return res.status(400).json({ error: 'Produto não encontrado' });
        }

        if (product.user_id !== req.userId) {
            return res.status(401).json({ error: "Você não pode deletar este produto" });
        }

        await product.destroy();

        return res.json({ message: 'Produto deletado' });
    }
}