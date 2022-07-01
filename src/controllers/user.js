import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/user.js';

const secretKey = process.env.SECRET_KEY;

export const register = async (req, res) => {
	if (
		!req.body.firstName ||
		!req.body.lastName ||
		!req.body.email ||
		!req.body.password
	) {
		return res.status(400).send('Missing registration details!');
	}
	try {
		const existingUser = await User.find({ email: req.body.email });
		if (existingUser.length !== 0) {
			return res.status(400).send('Email already in use!');
		}
		const salt = await bcrypt.genSalt();
		const hashedPassword = await bcrypt.hash(req.body.password, salt);
		const user = await User.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: hashedPassword,
		});
		res.status(201).send(user);
	} catch (e) {
		res.status(500).send('Something went wrong, try again later');
	}
};

export const login = async (req, res) => {
	if (!req.body.email || !req.body.password) {
		return res.status(400).send('Missing login details!');
	}
	const matchingUser = await User.find({ email: req.body.email });
	const matchingPassword = await bcrypt.compare(
		req.body.password,
		matchingUser[0].password
	);
	if (matchingUser && matchingPassword) {
		const token = jwt.sign(matchingUser[0].email, secretKey);
		const response = {
			token: token,
			user: matchingUser[0],
		};
		res.status(200).send(response);
		return;
	} else res.status(401).send('Invalid login credentials!');
};
