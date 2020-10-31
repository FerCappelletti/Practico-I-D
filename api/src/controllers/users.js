const User = require('../models/User');

const get = async (req, res) => {
	const users = await User.find();
	res.json(users);
};
 
const create = async (req, res) => {
	const { username } = req.body;
	const user = new User({ username });
	await user.save();
	res.status(201).json({ message: "OK" });
};
const $delete = async (req, res) => {
	const user = await User.findByIdAndRemove(req.params.id);
  	res.status(200).json(user);
};

module.exports = {
  get,
  create,
  $delete,
};
