// import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
// import "../../styles/home.css";

// export const Home = () => (
// 	<div className="text-center mt-5">
// 		<h1 className="bg-light">Lista de contactos</h1>
// 		<p>
// 			<img src={rigoImage} />
// 		</p>
// 		<a href="#" className="btn btn-success">
// 			ESto también funcionando
// 		</a>
// 	</div>
// );
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { contactForm } from "../component/contactForm";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Modal from "../component/modal";



export const Home = () => {
	const { store, actions } = useContext(Context);
	const [showModal, setShowModal] = useState(false);
	const [contactToDelete, setContactToDelete] = useState(null);
	const openModal = (contact) => {
        setContactToDelete(contact);
        setShowModal(true);
    };
	const closeModal = () => {
        setShowModal(false);
        setContactToDelete(null);
    };




	const deleteContact = () => {
        if (contactToDelete) {
            actions.deleteContact(contactToDelete.id)
                .then(() => {
                    closeModal();
                })
                .catch(error => {
                    console.error("Error deleting contact:", error);
                });
        }
    };
	useEffect(() => {
        actions.getContacts()
            .catch(error => {
                console.error("Error getting contacts:", error);
            });
    }, [actions]);


	return (
		<div className="container">
            <div>
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-group pull-down" id="contact-list">
                        {store.contacts.map((item, index) => (
                            <ContactForm 
                                key={index} 
                                name={item.name} 
                                address={item.address} 
                                phone={item.phone} 
                                email={item.email} 
                                onDeleteClick={() => openModal(item)}
                                id={item.id}
                            />
                        ))}
                    </ul>
                </div>
            </div>
            <Modal show={showModal} onClose={closeModal} onDelete={deleteContact} />
        </div>
	);
};
