import User from '../../models/user.js';

export const getData = async (req, res) => {
	const userId = req.body.userId;
	try {
		const userFound = await User.findById(userId);
		const userData = {
			sleep: userFound.sleep,
			fatigue: userFound.fatigue,
			weight: userFound.weight,
			restHR: userFound.restHR,
		};
		res.status(200).send({ userData });
	} catch (err) {
    res.status(404).send('Not found');
	}
};

export const addData = async (req, res) => {
	const userId = req.body.userId;
  try {
    const userFound = await User.findById(userId);
    userFound.sleep.push(parseInt(req.body.sleep)),
    userFound.weight.push(parseInt(req.body.weight)),
    userFound.fatigue.push(parseInt(req.body.fatigue)),
    userFound.restHR.push(parseInt(req.body.restHR))
    userFound.save()
    res.status(200).send(userFound)
  } catch (err) {
    res.status(404).send('Not found')
  }
};
