import React,{useState,useEffect} from "react";
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import '../App.css';

// funcion para mostrar todos los piratas
const TodosPiratas = () => {

    const [pirata, setPirata] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/listarpiratas")
            .then(res => setPirata(res.data))
            .catch(err => console.log(err));
    }, [])

    const borrarPirata = id => {
        axios.delete("http://localhost:8000/api/piratas/"+id)
            .then(res => {
                //Actualizar ls lita de autores por medio de filter
                let nuevaLista = pirata.filter(pirata => pirata._id !== id);
                setPirata(nuevaLista);
            })
    }


    return (
        <div className="container">
            <div className= "navegador">
                <div className="titulo">
                    <h1>Pirate Crew</h1>
                </div>
                <div>
                    <NavLink className="button-agregar" to ="/pirata/nuevo" >Agregar Pirata</NavLink>
                </div>
                <div>
                    <NavLink className="button-cerrar" to ="/" >Cerrar Sesión</NavLink>
                </div>
            </div>
            <div className="contenedor-principal">
                <div className="subcontenedor">

                    <div className='contenido'>
                        {
                        pirata.map((pirata, indice)=>(
                            <div key={indice}>
                            {/* <p>{serie}</p> */}
                            <h2 className="contenido-name">{pirata.name}</h2>
                            <div className="seccion-buttones">
                            <img src={pirata.imagen} className="imagenes"/>
                                <NavLink className="button-view" to ={`/pirata/${pirata._id}`} >Ver Detalles</NavLink>
                                <button className="button-delete" onClick={()=> borrarPirata(pirata._id)}>Borrar</button>
                            </div>
                            </div>
                        ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodosPiratas;