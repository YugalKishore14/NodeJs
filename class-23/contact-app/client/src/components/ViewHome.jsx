function ViewHome({ contacts }) {
    return (
        <div className="container mt-4">
            <div className="row">
                {contacts.map((contact) => (
                    <div className="col-md-4 mb-4" key={contact._id}>
                        <div className="card h-100 shadow">
                            <div className="card-body">
                                <h5 className="card-title">{contact.name}</h5>
                                <p className="card-text"><strong>Email:</strong> {contact.email}</p>
                                <p className="card-text"><strong>Phone:</strong> {contact.phone}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewHome;
