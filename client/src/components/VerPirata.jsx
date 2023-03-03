import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Pirata = () => {
    const {id} = useParams();
    const [pirata, setPirata] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/piratas/"+id)
            .then(res => {
                setPirata(res.data);
                
            })
            .catch(err => console.log(err));
    }, [id]);


    return(
        <div className="container">
            <div className= "navegador">
                <div className="titulo">
                    <h1>{pirata.name}</h1>
                </div>
            </div>
            <div className="contenedor-principal">
            <div className="row">
                <div className="col-6">
                    <img src={pirata.imagen} alt="pirata" className="imagenes-detalle" />
                </div>
                
                <div className="col-5" >
                    <div className="contenedor-blanco">
                        <h2 className="text-about">About</h2>
                        <p>
                            Position: {pirata.position}
                        </p>
                        <p>
                            Treasures: {pirata.treassures}
                        </p>
                        <div className="ordenar">
                        <p>Peg Leg: {
                                pirata.peg_leg ? 'Yes' : 'No'}
                        </p>
                        <p>{pirata.eye_patch ? <span className="btn btn-success">Yes</span> : <span className="btn btn-danger">No</span>} 
                        </p>
                        </div>
                        
                        <div className="ordenar">
                        <p>Eye Patch: {
                                pirata.eye_patch ? 'Yes' : 'No'}
                        </p>
                        <p>{pirata.eye_patch ? <span className="btn btn-success">Yes</span> : <span className="btn btn-danger">No</span>} 
                        </p>
                        </div>
                        <div className="ordenar">
                        <p>Hook Hand: {
                                pirata.hook_hand ? 'Yes' : 'No'
                            }</p>
                        <p>{pirata.hook_hand ? <span className="btn btn-success">Yes</span> : <span className="btn btn-danger">No</span>} 
                        </p>
                        </div>
                            
                        <Link to="/piratas" className="btn btn-primary">Regresar</Link>
                    </div>
                </div>
            </div>
            </div>

          
            
        </div>
    )

}

export default Pirata;