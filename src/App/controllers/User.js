const bcrypt = require('bcryptjs');

const userModel = require('../models/User');

module.exports = {
    async store(req, res) {
        const userExists = await userModel.findOne({ where: { email: req.body.email } });

        if (userExists) {
            return res.status(400).json({ error: 'Usuário já cadastrado' });
        }

        req.body.password_hash = await bcrypt.hash(req.body.password, 8);

        const { id, name, email } = await userModel.create(req.body);

        return res.json({ id, name, email });
    }
}