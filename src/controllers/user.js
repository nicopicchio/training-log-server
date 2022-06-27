import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/user.js';

const secretKey = process.env.SECRET_KEY;

export const register = async (req, res) => {
	if (
		!req.body.forename ||
		!req.body.surname ||
		!req.body.email ||
		!req.body.password
	) {
		return res.status(400).json('Bad HTTP request');
	}
	const salt = await bcrypt.genSalt();
	const hashedPassword = await bcrypt.hash(req.body.password, salt);
	const user = await User.create({
		forename: req.body.forename,
		surname: req.body.surname,
		email: req.body.email,
		password: hashedPassword,
	});
	console.log(user);
};

export const login = async (req, res) => {
	const matchingUser = await User.find({ email: req.body.email });
	const matchingPassword = await bcrypt.compare(
		req.body.password,
		matchingUser[0].password
	);
	if (matchingUser && matchingPassword) {
		const token = jwt.sign(matchingUser[0].email, secretKey)
		console.log(token, matchingUser[0])
	} else console.log('access denied')
};
