import { useState } from "react";

export default function ContactForm({ onAdd }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const submit = (e) => {
        e.preventDefault();
        onAdd(form);
        setForm({ name: "", email: "", phone: "" });
    };

    return (
        <form
            onSubmit={submit}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6"
        >
            <input
                className="border rounded px-3 py-2"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
                className="border rounded px-3 py-2"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
                className="border rounded px-3 py-2"
                placeholder="Phone"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <button className="md:col-span-3 bg-black text-white py-2 rounded">
                Add Contact
            </button>
        </form>
    );
}
