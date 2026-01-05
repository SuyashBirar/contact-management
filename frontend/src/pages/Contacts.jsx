import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import {
    getContacts,
    addContact,
    deleteContact,
} from "../api/contact.api.js";

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadContacts = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getContacts();
            setContacts(res.data.data);
        } catch (err) {
            console.error("Failed to load contacts:", err.response?.data || err.message);
            setError("Failed to load contacts. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleAdd = async (data) => {
        try {
            await addContact(data);
            loadContacts(); // Reload list
        } catch (err) {
            console.error("Failed to add contact:", err.response?.data || err.message);
            setError("Failed to add contact. Please try again.");
        }
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this contact?")) return;

        try {
            await deleteContact(id);
            loadContacts(); // Reload list
        } catch (err) {
            console.error("Failed to delete contact:", err.response?.data || err.message);
            setError("Failed to delete contact. Please try again.");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    useEffect(() => {
        loadContacts();
    }, []);

    return (
        <>
            <Navbar onLogout={logout} />
            <main className="max-w-3xl mx-auto p-4">
                <ContactForm onAdd={handleAdd} />

                {loading && (
                    <div className="flex justify-center py-8">
                        <div className="text-lg">Loading contacts...</div>
                    </div>
                )}

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                        <button
                            onClick={loadContacts}
                            className="ml-4 text-red-900 underline hover:no-underline"
                        >
                            Retry
                        </button>
                    </div>
                )}

                {!loading && !error && (
                    <ContactList contacts={contacts} onDelete={handleDelete} />
                )}

                {contacts.length === 0 && !loading && !error && (
                    <div className="text-center py-12 text-gray-500">
                        No contacts yet. Add one above!
                    </div>
                )}
            </main>
        </>
    );
}
