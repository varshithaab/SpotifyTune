import { Schema, model } from "mongoose";

export interface Premium {

    email : string,
    phoneNo : number,
    cardNo : number,
    expDate : number,
    cvv : number,
    amount : number 
}

const PremiumSchema = new Schema<Premium>(
    {
        email : { type: String, required: true },
        phoneNo : { type: Number, required: true },
        cardNo: { type: Number, required: true },
        expDate : { type: Number, required: true },
        cvv : {type: Number, required :true},
        amount : { type: Number, required: true }, 
    },
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
);

export const PremiumModel = model<Premium>('Premium', PremiumSchema);
