const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userModel = require('../models/User');
const authConfig = require('../../config/auth');

module.exports = {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await userModel.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: "Usuário não encontrado" });
        }

        const passwordCheck = await bcrypt.compare(password, user.password_hash);

        if (!passwordCheck) {
            return res.status(401).json({ error: "Senha não autorizada" });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}