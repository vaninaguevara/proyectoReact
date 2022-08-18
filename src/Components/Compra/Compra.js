import React,{ useContext} from "react";
import { cartContext } from "../../Context/CartContext";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { collection, addDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Grid from '@material-ui/core/Grid';
import "./Compra.css"

const Compra = () => {

    const datosComprador = {
        nombre: 'Juan',
        apellido: 'Perez',
        email: 'juanperez@gmail.com',
    }

    // this.state = {
    //     nombre: '',
    //     email: '',
    //     gender: '',
    //   }

    // const handleChange = (e) => {
    //     const { nombre, value } = e.target
    //     this.setState({ [nombre]: value })
    //   }

    const { cart, totalPrice } = useContext(cartContext);

    const finalizarCompra = () => {
        const ventasColecction = collection(db, 'ventas');
        addDoc(ventasColecction,{
            datosComprador,
            items: [{nombre: "algo"}],
            date: serverTimestamp(),
            total: 500,
        })
    }

    return (
        <Grid container p={5} class="compra-container">
            
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography component="div" variant="h5">
                        Total: ${totalPrice()}
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <div>
                        <TextField
                        id="outlined-textarea"
                        label="Nombre y apellido"
                        placeholder="Nombre y apellido"
                        
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Direccion"
                        placeholder="Direccion"
                        
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Telefono"
                        placeholder="Telefono"
                        
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Número de la tarjeta"
                        placeholder="Número de la tarjeta"
                
                        />
                        </div>
                    </Box>

                    <Button variant="outlined" size="medium" p={5}
                        onClick={finalizarCompra}>
                        Concretar compra
                    </Button>
                </Box>
        </Grid>
    )
}

export default Compra