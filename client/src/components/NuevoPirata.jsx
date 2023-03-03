import React, {useState} from "react";
import axios from "axios";
import { useNavigate,NavLink } from "react-router-dom";
import { Grid,Paper, TextField, Button, Box } from '@mui/material';
import Swal from 'sweetalert2'
import '../App.css';

const NuevoPirata = () => {

    const [name, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [treassures, setTesoro] = useState("");
    const [position, setCargo] = useState("");
    const [peg_leg, setPeg_leg] = useState(false);
    const [eye_patch, setEye_patch] = useState(false);
    const [hook_hand, setHook_hand] = useState(false);
    const [pirate_catch, setPirate_catch] = useState("");

    const paperStyle={padding :20,height:'80vh',width:480, margin:"20px auto"}
    const [errors] = useState({});


    const navigate = useNavigate()

    const guardarPirata = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/crearpirata", {
            position,    
            name,
            imagen,
            treassures,
            peg_leg,
            eye_patch,
            hook_hand,
            pirate_catch

        })
            .then((res)=>{
            Swal.fire('Exito', 'El registro se guardo correctamente','success')
            console.log(res);
            navigate('/piratas');
        }).catch((err)=>{
            Swal.fire('Error', 'Error al guardar registro','error')
            console.log(err)
        })
            
    }

    return (
        <div className="container">
            <div className= "navegador">
                <div className="titulo">
                    <h1> Add Pirate</h1>
                </div>
                <div>
                    <NavLink className="button-agregar" to ="/piratas" >Mostrar lista de Piratas</NavLink>
                </div>
            </div>

            <div>
                <form onSubmit={guardarPirata}>
                    <Grid>
                        <Paper elevation={10} style={paperStyle}>
                        
                            <TextField label='Nombre del Pirata' placeholder='Enter nombre' variant="outlined" fullWidth required  sx={{mt: 3}} 
                            onChange={(e)=>setNombre(e.target.value)}/>
                        

                            <TextField label='Imagen URL' placeholder='Enter Imagen URL' variant="outlined" fullWidth required sx={{mt: 3}} 
                            onChange={(e)=>setImagen(e.target.value)}/>
                            

                            <TextField label='Cantidad de Tesoro' placeholder='Enter Cantidad de Tesoro' variant="outlined" fullWidth required sx={{mt: 3}} 
                            onChange={(e)=>setTesoro(e.target.value)}/>
                        
                        <TextField label='Pirate Catch' placeholder='Enter Pirate Catch' variant="outlined" fullWidth required sx={{mt: 3}} 
                            onChange={(e)=>setPirate_catch(e.target.value)}/>

                        <div className="form-group">
                                <label htmlFor="position">Tipo de Cargo:</label>
                                <select type="text" id="position" name="position" value={position} onChange={e => setCargo(e.target.value)} className="form-control">
                                    <option value="Captain">Captain</option>
                                    <option value="First Mate">First Mate</option>
                                    <option value="Quarter Master">Quarter Master</option>
                                    <option value="Boatswain">Boatswain</option>
                                    <option value="Powder Mankey">Powder Mankey</option>
                                </select>
                                {errors.position ? <span className="text-danger">{errors.position.message}</span>: null}
                            </div>

                            <div className="form-group">
                                <input type="checkbox" className="form-check-input" id="peg_leg" name="peg_leg" checked={peg_leg} onChange={e => setPeg_leg(e.target.checked)} />
                                <label className="form-check-label" htmlFor="peg_leg">
                                    Peg Leg
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" className="form-check-input" id="eye_patch" name="eye_patch" checked={eye_patch} onChange={e => setEye_patch(e.target.checked)} />
                                <label className="form-check-label" htmlFor="eye_patch">
                                    Eye Patch
                                </label>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" className="form-check-input" id="hook_hand" name="hook_hand" checked={hook_hand} onChange={e => setHook_hand(e.target.checked)} />
                                <label className="form-check-label" htmlFor="hook_hand">
                                    Hook Hand
                                </label>
                            </div>

                            <Box mt={3}>
                                <Button variant="contained" color="primary">Cancelar</Button>
                                <Button type="submit" variant="contained" color="primary">Guardar</Button>
                            </Box>                  
                        </Paper>
                    </Grid>
                </form>
            </div>
        </div>
    )  

}

export default NuevoPirata;