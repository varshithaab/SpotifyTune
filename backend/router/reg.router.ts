const express=require('express');
import  { Router ,Request,Response,NextFunction  } from "express";
const router=Router();
import cors from "cors";
import asyncHandler  from "express-async-handler";
import { Model } from "mongoose";

const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

import {RegModel, Regs} from "../models/reg.model";
//import bodyParser from 'body-parser';
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
// /*
router.get("/",asyncHandler(async(req,res)=>{
  const regusers=await RegModel.find();
  res.json(regusers);
}));
router.post("/", asyncHandler(async (req, res) => {
  const {email,firstname,gender,lastname,mobile,pwd}=req.body;
  console.log(req.body);
  console.log("post method");
  //const {email,firstname,gender,lastname,mobile,pwd}=req.body;
  //const hashedPwd = await bcrypt.hash(pwd, 10); // Hash the password before saving it to the database
  const newUser = new RegModel({
   
    email:email,
    firstname: firstname,
    gender: gender,
    lastname:lastname,
    mobile: mobile,
    pwd: pwd,
  });
  console.log("new user");

  try {
    const createdNewUser = await newUser.save();
    res.status(201).json({
      message: 'user added Successfully',
      user: createdNewUser,
    });
  } catch (error) {
    console.error('Error while adding user:', error);
    res.status(500).json({
      message: 'An error occurred while adding the user.',
    });
  }
}));

router.delete('/:email', asyncHandler(async (req, res) => {
  const email = req.params.email;

  try {
    const deletedUser = await RegModel.findOneAndDelete({email:email});

    if (deletedUser) {
      res.status(200).json({
        message: 'User deleted successfully',
        deletedUser: deletedUser,
      });
    } else {
      res.status(404).json({
        message: 'User not found',
      });
    }
  } catch (error) {
    console.error('Error while deleting user:', error);
    res.status(500).json({
      message: 'An error occurred while deleting the user.',
    });
  }
}));





// router.post('/adduser', asyncHandler(async (req: Request, res: Response , next?:NextFunction):Promise<void> => {
//   console.log("shilpa",req)
//     try {
     
//       const userData: Regs = req.body;
//       console.log("sharanaya",userData)
      
//       const result = await RegModel.create(userData);
//       console.log(req.body);
//       console.log("Data received at the router for the user object sent via the service : " + JSON.stringify(result));
  
//       // If everything is successful, send a response to the client
//       //res.status(201).json({ message: 'Registration successful' });
//     //   const responseData = {
//     //     message: 'Registration successful',
//     //     data: {
            
            
//     //         email:userData?.email,
//     //         firstname:userData?.firstname,
//     //         gender: userData?.gender,
//     //         lastname: userData?.lastname, 
//     //         mobile: userData?.mobile, 
//     //         pwd:userData?.pwd, 
//     //         // You can include other fields if needed 
//     //     },
//     // };


//     // Send success response to the client 
//     res.status(201).json(result);
    
//     } catch (error) {
//       console.error('Error during user registration:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
    
//     }
//   }));
//   function isValidUser(email: string, password: string): Promise<boolean> {
//     // Replace this with your actual database check
//     return RegModel.findOne({ email, pwd: password })
//     .then((user) => !!user)
//     .catch((error) => {
//       console.error('Error during isValidUser:', error);
//       return false;
//     //return email === 'user@example.com' && password === 'password123';
//   });
// }
export async function isValidUser(email: string, password: string): Promise<boolean> {
  console.log('Checking if user with email ${email}is valid...');
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  try {
    const user = await RegModel.findOne({ email });
    console.log(`User found: ${user}`);

    if (!user) {
      console.log('User Not Found');
      
      return false;
    }
console.log('User Found');
console.log('Comparing passwords...');

    const passwordMatch =user.pwd === password;
    console.log(`Password is valid: ${passwordMatch}`);

    return passwordMatch;
  } catch (error) {
    console.error('Error during isValidUser:', error);
    return false;
  }
}
  // Define the login endpoint
  router.post('/api/login', async(req: Request, res: Response)=> {
    console.log('recieved POST request');
    const { email, password } = req.body;
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  try{
    const isValid = await isValidUser(email, password);
    console.log(`isValid: ${isValid}`);

    //const user = await RegModel.findOne({ email, pwd: password });

  
    if (isValid) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
    // If a user is found, return true; otherwise, return false
    //return !!user;
    // Replace the following logic with your actual authentication logic
    // if (isValidUser(email, password)) {
    //   res.status(200).json({ message: 'Login successful' });
    // } else {
    //   res.status(401).json({ message: 'Invalid credentials' });
    // }
  }catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  
  });

  router.put('/:email', asyncHandler(async (req: Request, res: Response) => {
    const email = req.params.email;
    const { firstname, lastname, mobile} = req.body;
  
    try {
      const updatedUser = await RegModel.findOneAndUpdate(
        { email: email },
        {
          $set: {
            firstname: firstname,
            lastname: lastname,
            mobile: mobile,
          },
        },
        { new: true }
      );
  
      if (updatedUser) {
        res.status(200).json({
          message: 'User updated successfully',
          updatedUser: updatedUser,
        });
      } else {
        res.status(404).json({
          message: 'User not found',
        });
      }
    } catch (error) {
      console.error('Error while updating user:', error);
      res.status(500).json({
        message: 'An error occurred while updating the user.',
      });
    }
  }));
  //get by emailID
  router.get('/:email', asyncHandler(async (req: Request, res: Response) => {
    const email = req.params.email;
  
    try {
      // Find a user by email
      const user = await RegModel.findOne({ email: email });
  
      if (user) {
        // If a user is found, send the user details in the response
        res.status(200).json({
          message: 'User found',
          user: user,
        });
      } else {
        // If no user is found with the specified email, send a not found response
        res.status(404).json({
          message: 'User not found',
        });
      }
    } catch (error) {
      // If an error occurs during the retrieval process, send a server error response
      console.error('Error while retrieving user by email:', error);
      res.status(500).json({
        message: 'An error occurred while retrieving the user.',
      });
    }
  }));

export default router;