import { Link } from "react-router-dom";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";


export const Card = ({ name, address, phone, email, id, index, getContacts }) => {

    function eliminarContacto() {
        fetch("https://playground.4geeks.com/contact/agendas/Hellken04/contacts/" + id, { method: 'DELETE' })
            .then((response) => {
                console.log(response);
                if (response.ok == false) {
                    throw new Error('Error al eliminar el contacto');
                }
                getContacts();
                return response;
            })
            .catch((error) => {
                alert(error);
            })
    }



    return (
        <div className="row border m-2">
            <div className="col-2">
                <img src={"https://avatar.iran.liara.run/public/"+id} className="card-img-top rounded-circle" alt="..." />
            </div>
            <div className="col-8">
                <p><strong>{name}</strong></p>
                <p><i className="fa-solid fa-location-dot"></i> {address}</p>
                <p><i className="fa-solid fa-phone"></i> {phone}</p>
                <p><i className="fa-solid fa-envelope"></i> {email}</p>
            </div>
            <div className="col-1 text-center">
                <Link to={"/editar/" + id} className="btn btn-light p-1 m-1">
                    <i className="fa-solid fa-pencil" ></i>
                </Link>
            </div>
            <div className="col-1">
                <a href="#" className="btn btn-light p-1 m-1" data-bs-toggle="modal" data-bs-target={"#modalEliminar" + id} >
                    <i className="fa-solid fa-trash" ></i>
                </a>
            </div>

            <div className="modal fade" id={"modalEliminar" + id} tabIndex="-1" 
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Eliminar Contacto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ¿Realmente desea eliminar el contacto? {name}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={eliminarContacto}>Yes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};