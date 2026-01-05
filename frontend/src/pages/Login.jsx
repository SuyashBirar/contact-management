import { useState } from "react";
import { loginUser } from "../api/auth.api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        try {
            const res = await loginUser(form);
            console.log("Full response:", res.data);

            // Fix: ApiResponse nesting
            const accessToken = res.data.data?.accessToken;
            if (accessToken) {
                localStorage.setItem("token", accessToken);
                console.log("Token stored:", localStorage.getItem("token"));
                navigate("/contacts");
            } else {
                console.error("No accessToken:", res.data);
            }
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
        }
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
