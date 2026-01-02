import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
    {
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String
        },
        phone: {
            type: String,
            required: true
        },
        message: {
            type: String
        }
    },
    { timestamps: true }
);

export const Contact = mongoose.model("Contact", contactSchema);
