export default function Navbar({ onLogout }) {
    return (
        <nav className="flex items-center justify-between p-4 border-b">
            <h1 className="text-xl font-bold">Contact Manager</h1>
            <button
                onClick={onLogout}
                className="text-sm text-red-600 hover:underline"
            >
                Logout
            </button>
        </nav>
    );
}
