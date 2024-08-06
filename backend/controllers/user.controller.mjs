import { User } from "../models/user.model.mjs";

export const register = async (req , res)=>{
    try {
        const { name  , email , password } = req.body;
        if(!name || !email || !password){
            res.status(400).send({
                message : "Something is missing",
                success : false
            });
        }
        const user = await User.findOne({email});
        if(user){
            res.status(400).send({
                message : "User already exists with this email",
                success : false
            })
        }
        await User.create({name , email , password});
        res.status(200).send({
            message : "Account Created",
            success : true
        })
    } catch (error) {
        console.log(error);
    }
}


export const login = async (req,res)=> {
    try {
        const {  email , password } = req.body;
        if(!email || !password){
            res.status(400).send({
                message : "Something is missing",
                success : false
            });
        }
        const user = await User.findOne({email});
        if(!user){
            res.status(400).send({
                message : "Incorrect email or password",
                success : false
            })
        }
        if(user.password !== password){
            res.status(400).send({
                message : "Incorrect email or password",
                success : false
            })
        }
        res.status(200).send({message : "Welome Back" , success : true , user : user});
    } catch (error) {
        console.log(error);
    }
}