import { useState } from "react";
import { signupUser } from "../api/auth.api";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        await signupUser(form);
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form className="w-full max-w-sm border p-6 rounded space-y-4" onSubmit={submit}>
                <h2 className="text-2xl font-bold text-center">Signup</h2>

                <input className="w-full border px-3 py-2 rounded" placeholder="Name"
                    onChange={(e) => setForm({ ...form, name: e.target.value })} />

                <input className="w-full border px-3 py-2 rounded" placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })} />

                <input type="password" className="w-full border px-3 py-2 rounded" placeholder="Password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })} />

                <button className="w-full bg-black text-white py-2 rounded">
                    Signup
                </button>

                <p className="text-center text-sm">
                    Already have an account? <Link className="underline" to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}
