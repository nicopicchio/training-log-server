import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		sleep: [Number],
		fatigue: [Number],
		restHR: [Number],
		weight: [Number],
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
