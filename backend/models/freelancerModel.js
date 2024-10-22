import mongoose from "mongoose";

const freelancerSchema = mongoose.Schema({
    name: String,
    task: String,
    cost: Number
});

export const Freelancer = mongoose.model('Freelancer', freelancerSchema);