import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx";


export const Home = () => {

	const [contactos, setContactos] = useState([]);
	const { store, dispatch } = useGlobalReducer();

	function getContacts() {
		fetch("https://playground.4geeks.com/contact/agendas/Hellken04/contacts")
			.then((response) => {
				console.log(response);
				if (response.ok == false) {
					throw new Error('Error al consultar los contactos');
				}
				return response.json();
			})
			.then((data) => {
		
				dispatch({type:"load_contacts", payload:
					data.contacts});
			
			})
			.catch((error) => {
				alert(error);
			})
	}

	useEffect(()=>{
		getContacts();
	},[])



	return (
		
		<div className="container mt-5">
			<div className="text-center">
				<h1>Hellken04 Contact List</h1>
			</div>
			<div className="text-end">
				<Link to="/crear" className="btn btn-success m-2">Add New Contact</Link>
			</div>
			<>
				{store.contacts.map((contacto, index, array) => {
					return (
						<Card name={contacto.name} address={contacto.address} phone={contacto.phone} email={contacto.email} id={contacto.id} key={index} getContacts={getContacts}/>
					)
					}
				)
				}
			</>
		</div>
	)
}; 

export default Home;