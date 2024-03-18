import { Schema,model } from "mongoose";
//import bcrypt from 'bcrypt';

export interface Regs{
  
    email: string,
    firstname: string,
    gender: string,
    lastname: string,
    mobile: string,
    pwd: string,

}
export const RegSchema = new Schema<Regs>(
    {
  email:  {type:String , required:true},
    firstname: {type:String, required:true},
    gender:  {type:String ,required:true},
    lastname:  {type:String ,required:true},
    mobile:  {type:String ,required:true},
    pwd: {type:String , required:true},
    },

    {
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }


);

export const RegModel =model<Regs>('reg',RegSchema);

