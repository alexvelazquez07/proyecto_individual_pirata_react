import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material';
import {NavLink} from 'react-router-dom';
import Swal from 'sweetalert2';

const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:480, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#808080', height:'10vh',width:80}
    const btnstyle={margin:'25px 0'}

    const [email,setEmail] = useState('')
    const [clave,setClave] = useState('')
    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
            email, clave
        }, {withCredentials:true})
        .then((res)=>{
            Swal.fire('Exito', 'Bienvenido al sistema','success')
            console.log(res)
            
            navigate('/piratas')
        }).catch((err)=>{
            Swal.fire('Error', 'Usuario o contraseña incorrecto','error')
            console.log(err)
           
        })
    }


    return(

        <div>
            <form onSubmit={submitHandler}>
                <Grid>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}></Avatar>
                            <h2>Iniciar Sesión</h2>
                        </Grid>
                        <TextField label='Email' placeholder='Enter email' variant="outlined" fullWidth required
                        onChange={(e)=>setEmail(e.target.value)}/>
                        <TextField label='Clave' placeholder='Enter clave' type='password' variant="outlined" fullWidth required sx={{ mt: 3 }} 
                        onChange={(e)=>setClave(e.target.value)}/>
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Ingresar</Button>                        
                        <Typography >
                            <Link href="#" > Haz olvidado tu contraseña ?</Link>
                        </Typography>
                        <Typography sx={{ mt: 2 }}> Tienes un usuario?
                            <NavLink to="/registrarse" >Regístratre </NavLink>
                        </Typography>
                    </Paper>
                </Grid>
            </form>
        </div>
    )
}

export default Login