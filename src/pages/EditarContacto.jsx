
import { Link, useParams, useNavigate } from "react-router-dom";  // To use link for navigation and useParams to get URL parameters
import PropTypes from "prop-types";  // To define prop types for this component
import rigoImageUrl from "../assets/img/rigo-baby.jpg"  // Import an image asset
import useGlobalReducer from "../hooks/useGlobalReducer";
import react, { useState } from 'react';

export const EditarContacto = props =>{
    const { store } = useGlobalReducer();
    const { theId } = useParams();
    const contact = store.contacts.find(contact => contact.id === parseInt(theId));
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
            name: contact.name,
            email: contact.email,
            telephone: contact.phone ,
            address: contact.address
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            console.log (e.target.value);
            console.log(e.target.name)
            setFormData(prevState => ({
                ...prevState,
                [name]: value,
            }));
        };
    
        function edit_contact (){            
            
            let bodyData = {name: formData.name, phone:formData.telephone, email:formData.email, address:formData.address}
            fetch("https://playground.4geeks.com/contact/agendas/Hellken04/contacts/"+theId,{
                method:"PUT",
                body: JSON.stringify(bodyData),
                headers:{
                    'Content-Type':'application/json'
                }
            })
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    console.log(data);
                    navigate("/");
                })
                .catch((error)=>{
                    alert(error);
                })
                
            }

    return(
        <div className="container">
                <h1>Add New Contact</h1>
        
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label> 
                    <input type="text" className="form-control" id="name" placeholder="Full Name" value={formData.name}  onChange={handleChange} name="name"/>
                </div>
        
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">e-mail</label> 
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" value={formData.email} name="email" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label> 
                    <input type="text" className="form-control" id="phone" placeholder="Phone Number" name="telephone" value={formData.telephone} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label> 
                    <input type="Text" className="form-control" id="address" placeholder="Address" name="address" value={formData.address} onChange={handleChange} />
                </div>
        
                <button type="button" className="btn btn-success" onClick={()=>edit_contact()}>Save</button>
                <br></br>
                <Link to="/">or get back to contacts</Link>
            </div>
    )
}

EditarContacto.propTypes = {
  // Although 'match' prop is defined here, it is not used in the component.
  // Consider removing or using it as needed.
  match: PropTypes.object
};