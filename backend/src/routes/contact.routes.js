import { Router } from "express";
import {
    createContact,
    getUserContacts,
    getContactById,
    updateContact,
    deleteContact
} from "../controllers/contact.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// All routes are protected
router.use(verifyJWT);

router.route("/")
    .post(createContact)
    .get(getUserContacts);

router.route("/:contactId")
    .get(getContactById)
    .patch(updateContact)
    .delete(deleteContact);

export default router;
