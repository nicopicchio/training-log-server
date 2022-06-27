import jwt from 'jsonwebtoken';
import User from '../../models/user.js';

const secretKey = process.env.SECRET_KEY;

export async function validateAuthentication(req, res, next) {
	const header = req.header('authorization');
	if (!header) {
		return res.status(401).send({
      authorization: 'Missing Authorization header'
    });
	}

	const [type, token] = header.split(' ');

	const isTypeValid = validateTokenType(type);
	if (!isTypeValid) {
		return res.status(401).send({
			authentication: `Invalid token type, expected Bearer but got ${type}`,
		});
	}

	const isTokenValid = validateToken(token);
	if (!isTokenValid) {
		return res.status(401).send({
      authentication: 'Invalid or missing access token'
    });
	}

	const decodedToken = jwt.decode(token);
	const matchingUser = await User.find({ email: decodedToken });
	if (matchingUser) {
		next();
	}
}

function validateToken(token) {
	if (!token) {
		return false;
	} else return jwt.verify(token, secretKey, (error) => {
			return !error;
		});
}

function validateTokenType(type) {
	if (!type || type.toUpperCase() !== 'BEARER') {
		return false;
	} else return true;
}
