import User from '../../models/user.js';

export const getData = async (req, res) => {
	console.log('getting data');
};

export const addData = async (req, res) => {
	const matchingUser = await User.where({ email: req.body.email }).exec();
	const datasets = matchingUser[0].datasets
  datasets.sleep.push(req.body.sleep)
  datasets.restHR.push(req.body.restHR)
  datasets.fatigue.push(req.body.fatigue)
  datasets.weight.push(req.body.weight)
  res.status(200).send(datasets)
};
