import User from '../../models/user.js';

export const getData = async (req, res) => {
  console.log('getting data')
}

export const addData = async (req,res) => {
  const matchingUser = await User.find()
}
