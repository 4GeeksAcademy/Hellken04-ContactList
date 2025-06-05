import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';

export const CrearContacto = ()=> {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        telephone: '',
        address: ''
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

    function add_contact (){            
        
        let bodyData = {name: formData.name, phone:formData.telephone, email:formData.email, address:formData.address}
		fetch("https://playground.4geeks.com/contact/agendas/Hellken04/contacts",{
			method:"POST",
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

return (
    <div className="container">
        <h1>Add New Contact</h1>

        <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label> 
            <input type="text" className="form-control" id="name" placeholder="Full Name"  onChange={handleChange} name="name"/>
        </div>

        <div className="mb-3">
            <label htmlFor="email" className="form-label">e-mail</label> 
            <input type="email" className="form-control" id="email" placeholder="name@example.com"  name="email" onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label> 
            <input type="text" className="form-control" id="phone" placeholder="Phone Number" name="telephone" onChange={handleChange} />
        </div>
        <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label> 
            <input type="Text" className="form-control" id="address" placeholder="Address" name="address" onChange={handleChange} />
        </div>

        <button type="button" className="btn btn-success" onClick={()=>add_contact()}>Save</button>
        <br></br>
        <Link to="/">or get back to contacts</Link>
    </div>
)

}

