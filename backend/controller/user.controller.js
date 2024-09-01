import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = new User({
                name: name,
                email: email,
                password: hashedPassword
            });

            await newUser.save()
                .then(data => {
                    res.status(200).json(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the user."
                    });
                });
        }
    }
    catch (err) {
        console.log(err);
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }
        const isMatch =bcrypt.compare(password, user.password);
        // console.log(isMatch);
        isMatch
            .then((result) => {
                if (result) {
                    res.status(200).json({
                        message: "User logged in successfully",
                        user: {
                            id: user._id,
                            name: user.name,
                            email: user.email
                        }
                    });
                }
                else {
                    return res.status(400).json({ error: "Invalid credentials" });
                }
            })
            .catch((err) => {
                console.log(err);
                return res.status(400).json({ error: err });
            });

        // if(!user || !isMatch){
        //     return res.status(400).json({error:"Invalid credentials"});
        // }
        // else{
        //     res.status(200).json({message:"User logged in successfully",
        //     user:{
        //         id:user._id,
        //         name:user.name,
        //         email:user.email
        //     }});
        // }
    }
    catch (err) {
        console.log(err);
    }
}
