import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
    }
},
    {
        timestamps: true
    });

export const Contact = mongoose.model("Contact", contactSchema);
