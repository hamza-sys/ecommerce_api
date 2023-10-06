const Product = require("../models/Product.js");

// get a single product
const getSingleProduct = async (id) => {
    const product = await Product.findById(id)
    return product
}

// get products
const getProducts = async () => {
  const products = await Product.find();
  return products;
};

// create product
const createAProduct = async (product) => {
  const newProduct = new Product(product);
  return newProduct;
};

// update product
const updateAProduct = async (id, updatedProductData) => {
  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    updatedProductData,
    { new: true }
  );
  return updatedProduct;
};

// delete product
const deleteAProduct = async (id) => {
      const deletedProduct = await Product.findByIdAndDelete(id)
      return deletedProduct
}


module.exports = {
  getProducts,
  createAProduct,
  updateAProduct,
  deleteAProduct,
  getSingleProduct
};
