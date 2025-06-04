import { Link } from "react-router-dom";
import axios from "axios";

function ContactTable({ contacts }) {
    const deleteContact = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/contacts/${id}`);
            window.location.reload();
        } catch (err) {
            console.error("Delete failed", err);
        }
    };

    return (
        <table className="table table-striped table-bordered">
            <thead className="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th style={{ width: "150px" }}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => (
                    <tr key={contact._id}>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <Link
                                to={`/edit/${contact._id}`}
                                className="btn btn-sm btn-primary me-2"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => deleteContact(contact._id)}
                                className="btn btn-sm btn-danger"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ContactTable;
