export default function ContactList({ contacts, onDelete }) {
    if (!contacts.length)
        return <p className="text-gray-500">No contacts found.</p>;

    return (
        <ul className="space-y-3">
            {contacts.map((c) => (
                <li
                    key={c._id}
                    className="border p-4 rounded flex justify-between items-center"
                >
                    <div>
                        <p className="font-semibold">{c.name}</p>
                        <p className="text-sm text-gray-600">{c.phone}</p>
                    </div>

                    <button
                        onClick={() => onDelete(c._id)}
                        className="text-sm text-red-500 hover:underline"
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}
