import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const AddContact = () => {
    const { store, actions } = useContext(Context);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            const selectedContact = store.contacts.find(contact => contact.id === parseIn(id));
            if (selectedContact) {
                setContact({
                    name: selectedContact.name,
                    email: selectedContact.email,
                    phone: selectedContact.phone,
                    address: selectedContact.address
                });
            }
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            actions.updateContact(parseInt(id), contact)
                .then(() => {
                    navigate("/");
                })
                .catch(error => {
                    console.error("Error updating contact:", error);
                });
        } else {
            actions.createContact(contact)
                .then(() => {
                    navigate("/");
                })
                .catch(error => {
                    console.error("Error creating contact:", error);
                });
        }
    };
    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">{id ? "Edit Contact" : "Añade un contacto nuevo"}</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombre completo</label>
                        <input type="text" className="form-control" placeholder="Introduce tu nombre" name="name" value={contact.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Introduce tu email" name="email" value={contact.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Tfno.</label>
                        <input type="phone" className="form-control" placeholder="Introduce tu tfno" name="phone" value={contact.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Dirección</label>
                        <input type="text" className="form-control" placeholder="Introduce tu dirección" name="address" value={contact.address} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 my-4 form-control">{id ? "Update" : "Guardar"}</button>
                    <Link className="m-1 w-50 text-center" to="/">Ir a contactos</Link>
                </form>
            </div>
        </div>
    );
};