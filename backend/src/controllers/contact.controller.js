import { Contact } from "../models/contact.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !phone) {
        throw new ApiError(400, "Name and phone are required");
    }

    const contact = await Contact.create({
        owner: req.user._id,
        name,
        email,
        phone,
        message
    });

    console.log("REQ.USER:", req.user);
    console.log("REQ.BODY:", req.body);


    return res
        .status(201)
        .json(
            new ApiResponse(201, contact, "Contact created successfully")
        );
});


const getUserContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ owner: req.user._id })
        .sort({ createdAt: -1 });

    return res
        .status(200)
        .json(
            new ApiResponse(200, contacts, "Contacts fetched successfully")
        );
});


const getContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findOne({
        _id: req.params.contactId,
        owner: req.user._id
    });

    if (!contact) {
        throw new ApiError(404, "Contact not found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, contact, "Contact fetched successfully")
        );
});



const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findOneAndUpdate(
        {
            _id: req.params.contactId,
            owner: req.user._id
        },
        req.body,
        { new: true, runValidators: true }
    );

    if (!contact) {
        throw new ApiError(404, "Contact not found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, contact, "Contact updated successfully")
        );
});



const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findOneAndDelete({
        _id: req.params.contactId,
        owner: req.user._id
    });

    if (!contact) {
        throw new ApiError(404, "Contact not found");
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, {}, "Contact deleted successfully")
        );
});


export {
    createContact,
    getUserContacts,
    getContactById,
    updateContact,
    deleteContact
}
