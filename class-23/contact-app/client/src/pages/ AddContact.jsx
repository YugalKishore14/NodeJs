import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddContact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/contacts', form);
        navigate('/view');
    };

    return (
        <div className="container mt-4" style={{ maxWidth: '500px' }}>
            <h2 className="mb-4">Add Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Enter name"
                        onChange={handleChange}
                        value={form.name}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={handleChange}
                        value={form.email}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Enter phone number"
                        onChange={handleChange}
                        value={form.phone}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Contact</button>
            </form>
        </div>
    );
}

export default AddContact;
