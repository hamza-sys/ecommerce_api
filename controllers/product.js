
const { getProducts, createAProduct, updateAProduct, deleteAProduct } = require('../services/product.js');

// get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await getProducts()
        res.status(200).json(products);
      } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
      }
}

// create a product
const createProduct = async (req, res) => {
    const {title, desc, price, category, brand, quantity, rating, image} = req.body;

    if (!title || !desc || !price || !quantity) return res.status(400).json({message: 'provide all details of product'})

    try {
        const product = await createAProduct({
            title,
            desc,
            price,
            category,
            brand,
            quantity,
            rating,
            image
        })

        await product.save();

        return res.status(201).json(product);

    }catch(err){
        console.log(err);
        res.status(500).send("Server Error");
    }
}


// update a product
const updateProduct = async (req, res) => {
    const {id} = req.params;

    const updatedProductData = req.body;

    try {
        const updatedProduct = await updateAProduct(id, updatedProductData)

        if (!updatedProduct) return res.status(400).send('invalid id')

        return res.status(200).json(updatedProduct)

    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }

}

// delete a product
const deleteProduct = async (req, res) => {
    const {id} = req.params;

    try {
        const deletedProduct = await deleteAProduct(id)

        if (!deletedProduct) return res.status(400).send('Invalid id')

        return res.status(200).json({deletedProduct, message: "Product deleted successfully"})
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error')
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}