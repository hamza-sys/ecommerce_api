const { getOrders, createAOrder, getAllOrdersOfAUser } = require("../services/order");
const { getSingleProduct } = require("../services/product");
const { getSingleUser } = require("../services/user");

// get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await getOrders();
    return res.status(200).json(orders);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// create order
const createOrder = async (req, res) => {
  const { user, products, totalPrice, shippingAddress } = req.body;

  if (!user || products.length <= 0 || !totalPrice || !shippingAddress) {
    return res.status(400).send("All Fields are required...");
  }

  try {
    const isUserExist = await getSingleUser(user);
    if (!isUserExist) return res.status(400).send("user not exists");

     for (const prod of products) {
      const product = await getSingleProduct(prod.product);
      if (!product) return res.status(400).send('You are ordering a product that is not in our list of products');
    }

    const order = await createAOrder({
      user,
      products,
      totalPrice,
      shippingAddress,
    });

    await order.save();
    return res.status(201).json(order);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

// update order
const updateOrder = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

// get single user orders
const getSingleUserOrders = async (req, res) => {
    const {userId} = req.params;
  try {
    console.log(userId)
    const user = await getSingleUser(userId)
    if (!user) return res.status(400).send('invalid user')

    const orders = await getAllOrdersOfAUser(userId)
    console.log(orders)
    return res.status(200).json(orders)
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
  getSingleUserOrders,
};
