import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secretKey = process.env.SECRET_KEY;

export const register = async (req, res) => {
	if (
		!req.body.forename ||
		!req.body.surname ||
		!req.body.username ||
		!req.body.password
	) {
		return res.status(400).json('Bad HTTP request');
	}
	try {
    const salt = await bcrypt.genSalt()
    const password = await bcrypt.hash(req.body.password, salt)
		const registeredUser = 
		res.status(200).json({ registeredUser });
	} catch (err) {
		console.error(err);
		res.status(500).json('Something went wrong!');
	}
};
