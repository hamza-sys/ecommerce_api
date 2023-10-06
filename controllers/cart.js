const { getCarts, createACart, updateACart, getSingleUserCartItems } = require("../services/cart");
const { getSingleProduct } = require("../services/product");
const { getSingleUser } = require("../services/user");

// get a single user cart
const getSingleUserCart = async (req, res) => {
  const { userId } = req.params;
  console.log(userId)

  try {
    const user = await getSingleUser(userId);
     if (!user) return res.status(400).send("user not exists");

    const cartItems = await getSingleUserCartItems(userId)
    res.status(200).json(cartItems)

  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// getAllCartItems
const getAllCartItems = async (req, res) => {
  try {
    const carts = await getCarts();
    res.status(200).json(carts);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// create a cart item
const createCart = async (req, res) => {
  const { user, product, quantity } = req.body;

  console.log(product)

  if (!user || !product || !quantity) {
    return res.status(400).send("All fields are required...");
  }

  try {
    const isUserExist = await getSingleUser(user);
    if (!isUserExist) return res.status(400).send("user not exists");

    const isProductExist = await getSingleProduct(product);
    if (!isProductExist) return res.status(400).send("Product not exists");

    console.log(product)
    const cart = await createACart({
      user,
      product,
      quantity,
    });

    await cart.save();
    console.log(cart)
    return res.status(201).json(cart);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// update a cart item
const updateCart = async (req, res) => {
  const { id } = req.params;

  const updatedCartData = req.body;

  try {
    const updatedCart = await updateACart(id, updatedCartData);

    if (!updatedCart) return res.status(400).send("invalid id");

    return res.status(200).json(updatedCart);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// delete a cart item
const deleteCart = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCart = await deleteACart(id);

    if (!deletedCart) return res.status(400).send("Invalid id");

    return res
      .status(200)
      .json({ deletedCart, message: "cart deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  getAllCartItems,
  createCart,
  updateCart,
  deleteCart,
  getSingleUserCart
};
