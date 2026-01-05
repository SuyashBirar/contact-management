import api from "./axios";

export const getContacts = () => api.get("/contacts");
export const addContact = (data) => api.post("/contacts", data);


// contact.api.js - CORRECT (match backend route):
export const deleteContact = (id) => api.delete(`/contacts/${id}`);  // Already looks correct?

