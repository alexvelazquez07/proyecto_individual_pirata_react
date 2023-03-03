import React, {useState} from 'react';
import { Grid,Paper, TextField, Button, Box,Alert} from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'



const Registrarse = () => {

    const [nombre, setNombre] = useState('')
    const [nombresError, setNombresError] = useState("");

    const [apellido, setApellido] = useState('')
    const [apellidosError, setApellidosError] = useState("");

    const [usuario, setUsuario] = useState('')
    const [usuarioError, setUsuarioError] = useState("");

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState("");

    const [clave, setClave] = useState('')
    const [passwordError, setPasswordError] = useState("");

    const [confiPassword, setConfiPassword] = useState('')
    const [confiPasswordError, setConfiPasswordError] = useState("");

    const paperStyle={padding :20,height:'80vh',width:480, margin:"20px auto"}

    const navigate = useNavigate()
//Funcion que evita refrescar la pantalla
const submiHandler = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/api/registrar',{
        nombre,
        apellido,
        usuario,
        email,
        clave
    }, {withCredentials:true}).
    then((res)=>{
        Swal.fire('Exito', 'El registro se guardo correctamente','success')
        console.log(res);
        navigate('/');
    }).catch((err)=>{
        Swal.fire('Error', 'Error al guardar registro','error')
        console.log(err)
    })

   /* const nuevoUsuario = {nombres, apellidos, usuario,email, password, confiPassword}; //Creando un objeto/diccionario con todas las variables que creamos previamente
    console.log("Nuevo registro:", nuevoUsuario);

    
    if(nombres.length<2){      
        setNombresError("El nombre debe tener al menos 2 caracteres");
    } else{
        setNombresError("");
    }

    if(apellidos.length<2){
        setApellidosError("El apellido debe tener al menos 2 caracteres");
    } else{
        setApellidosError("");
    }

    if (usuario.length<2) {
        setUsuarioError("El usuario debe tener al menos 2 caracteres")
    } else {
        setUsuarioError("");
    }

    if(password.length<8){
        setPasswordError("Contraseña debe tener al menos 8 caracteres");
    } else{
        setPasswordError("");
    }

    if(confiPassword !== password){
        setConfiPasswordError("La clave no coinciden");
    } else{
        setConfiPasswordError("");
    }
    
    setHizoSubmit(true);*/
}
/*const mensaje = () => {
    if(!hizoSubmit) {
        return "Por favor ingresa todos tus datos";
    } else{
        return "¡Gracias por ingresar tus datos!";
    }
}*/

/*Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'info',
    footer: '<b> Este es un ejemplo de un footer con negrita</b> '
  })*/

    return (


        <div>
            <form onSubmit={submiHandler}>
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <h2>Registrarse</h2>
                        </Grid>
                        <TextField label='Nombres' placeholder='Enter nombres' variant="outlined" fullWidth required  sx={{mt: 3}} 
                        onChange={(e)=>setNombre(e.target.value)}/>
                        {nombresError ?<p style={{color:'red'}}> {nombresError}</p> :''}

                        <TextField label='Apellidos' placeholder='Enter apellidos' variant="outlined" fullWidth required sx={{mt: 3}} 
                        onChange={(e)=>setApellido(e.target.value)}/>
                        {apellidosError ?<p style={{color:'red'}}> {apellidosError}</p> :''}

                        <TextField label='usuario' placeholder='Enter usuario' variant="outlined" fullWidth required sx={{mt: 3}} 
                        onChange={(e)=>setUsuario(e.target.value)}/>
                        {usuarioError ?<p style={{color:'red'}}> {usuarioError}</p> :''}

                        <TextField label='Email' placeholder='Enter email' variant="outlined" fullWidth required sx={{mt: 3}} 
                        onChange={(e)=>setEmail(e.target.value)} value={email}/>

                        <TextField label='Clave' placeholder='Enter clave' type='password' variant="outlined" fullWidth required sx={{mt: 3}} 
                        onChange={(e)=>setClave(e.target.value)}  value={clave}/>
                        {passwordError ?<p style={{color:'red'}}> {passwordError}</p> :''}

                        <TextField label='Confirmar' placeholder='Enter confirmar' type='password' variant="outlined" fullWidth required sx={{mt: 3}}
                        onChange={(e)=>setConfiPassword(e.target.value)}  value={confiPassword}/>
                        {confiPasswordError ?<p style={{color:'red'}}> {confiPasswordError}</p> :''}
                        
                        <Box mt={3}>
                            <Button variant="contained" color="primary">Cancelar</Button>
                            <Button type="submit" variant="contained" color="primary">Guardar</Button>
                        </Box>                  
                    </Paper>
                </Grid>
            </form>
        </div>
    )
}

export default Registrarse
