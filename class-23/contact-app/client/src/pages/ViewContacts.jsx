import { useEffect, useState } from 'react';
import axios from 'axios';
import ContactTable from '../components/ContactTable';

function ViewContacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/contacts')
            .then((res) => setContacts(res.data))
            .catch(console.error);
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h2>All Contacts</h2>
            <ContactTable contacts={contacts} />
        </div>
    );
}

export default ViewContacts;