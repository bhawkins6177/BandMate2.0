
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();//// if the dotenv doesnt work change this to 'test' for now

const secret = 'test'
export const signin = async (req, res) => {

    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({email})

        if(!existingUser) return res.status(404).json({message: "User does not exist"});
        // look up how to check if the password is correct 
        // tried to compare strings but doesnt work
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);// returns a boolean

        if(!isPasswordCorrect) return res.status(400).json({message: "password is incorrect, please try again"});

        const token = jwt.sign({email:existingUser.email, id: existingUser._id}, secret, {expiresIn: '1h'})// later add the secret string to .env for security
        // bug was fixed, forgot the _id instead of just id

        res.status(200).json({result: existingUser, token})
    } catch (error) {
        res.status(500).json({message:'Something didnt go right...'})//remember 500 means undefined server error
    }
}

export const signup = async (req, res) => {
    const {email, password, confirmPassword, firstName, lastName} = req.body;
    try {
        const existingUser = await  User.findOne({email});

        if(existingUser) return res.status(400).json({message:'Email already in use'}); 

        if(password !== confirmPassword) return res.status(400).json({message:'Password fields do not match'});

        const hashedPassword = await bcrypt.hash(password, 12); // checks if the password field is empty

        const newUser = await User.create({
            email,
            password: hashedPassword,
            name: `${firstName} ${lastName}`
        });

        const token = jwt.sign({email:newUser.email, id: newUser._id}, secret, {expiresIn: '1h'})

        res.status(200).json({result: newUser, token});

    } catch (error) {
        res.status(500).json({message:'Something didnt go right...'})
    }
}