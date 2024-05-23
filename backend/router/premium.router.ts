import express, { Router, Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import cors from "cors";

import { PremiumModel } from "../models/premium.model";

const router: Router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/", asyncHandler(async (req, res) => {
    const premium = await PremiumModel.find();
    res.json(premium);
}));

//TO RETRIEVE THE DETAILS OF PAYMENT
router.get("/latest", asyncHandler(async (req, res) => {
  const premium = await PremiumModel.findOne().sort({ createdAt: -1 });
  res.json(premium);
}));

//POST METHOD FOR TAKING THE PAYMENT GATEWAY DETAILS
router.post("/", asyncHandler(async (req, res) => {
  const { email, phoneNo, cardNo, expDate, cvv, amount } = req.body;
  console.log(req.body);
  console.log("Post method");

  // Convert string values to numbers
  const cardNoNum = Number(cardNo.replace(/\s/g, ''));
  const expDateNum = Number(expDate.replace(/\D/g, ''));
  const amountNum = Number(amount); 

  const newData = new PremiumModel({
    email: email,
    phoneNo: phoneNo,
    cardNo: cardNoNum,
    expDate: expDateNum,
    cvv: cvv,
    amount: amountNum,
  });
  console.log("newData");

  try {
    const createdNewPayment = await newData.save();
    res.status(201).json({
      message: "Payment done Successfully",
      premium: createdNewPayment,
    });
  } catch (error) {
    console.error("Error while adding user:", error);
    res.status(500).json({
      message: "An error occurred while adding the user.",
    });
  }
}));

export default router;

