const { diskStorage } = require('multer');
const crypto = require('crypto');
const { extname, resolve } = require('path');

module.exports = {
    storage: diskStorage({
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, res) => {
                if (err) return cb(err);

                return cb(null, res.toString('hex') + extname(file.originalname));
            });
        },
    }),
};