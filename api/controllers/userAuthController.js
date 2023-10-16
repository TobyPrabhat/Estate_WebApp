import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const {name, email, password} = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const NewUser = new User({name, email, password: hashPassword});
    try {
        await NewUser.save();
        res.status(201).json('user successfully saved');
    } catch (error) {
        res.status(500).json(error.message);
    }
};