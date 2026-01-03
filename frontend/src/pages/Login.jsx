import { useState } from "react";
import { loginUser } from "../api/auth.api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        const res = await loginUser(form);
        localStorage.setItem("token", res.data.accessToken);
        navigate("/contacts");
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={submit}
                className="w-full max-w-sm border p-6 rounded space-y-4"
            >
                <h2 className="text-2xl font-bold text-center">Login</h2>

                <input
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Email"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />

                <input
                    type="password"
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Password"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                />

                <button className="w-full bg-black text-white py-2 rounded">
                    Login
                </button>

                <p className="text-center text-sm">
                    No account? <Link className="underline" to="/signup">Signup</Link>
                </p>
            </form>
        </div>
    );
}
