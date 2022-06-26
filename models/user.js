import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		forename: {
			type: String,
			required: true,
		},
		surname: {
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
		training: [Number],
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
