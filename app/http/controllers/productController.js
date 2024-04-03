const Product = require('../../models/product')

function productController() {
    return {
        async index(req, res) {
            const medicines = await Product.find()
            return res.render('product', {medicines: medicines})
        }
    }
}

module.exports = productController