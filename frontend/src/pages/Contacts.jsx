import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import {
    getContacts,
    addContact,
    deleteContact,
} from "../api/contact.api";

export default function Contacts() {
    const [contacts, setContacts] = useState([]);

    const loadContacts = async () => {
        const res = await getContacts();
        setContacts(res.data.data);
    };

    useEffect(() => {
        loadContacts();
    }, []);

    const handleAdd = async (data) => {
        await addContact(data);
        loadContacts();
    };

    const handleDelete = async (id) => {
        await deleteContact(id);
        loadContacts();
    };

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <>
            <Navbar onLogout={logout} />
            <main className="max-w-3xl mx-auto p-4">
                <ContactForm onAdd={handleAdd} />
                <ContactList contacts={contacts} onDelete={handleDelete} />
            </main>
        </>
    );
}
