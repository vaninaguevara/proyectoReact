import React,{ useContext ,useEffect ,useState} from "react";
import { cartContext } from "../../Context/CartContext";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { collection, addDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import Grid from '@material-ui/core/Grid';
import "./Compra.css"
import { Input, InputLabel } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const Compra = () => {
    

    const finalizarCompra = (e) => {
        const ventasColecction = collection(db, 'ventas');
        addDoc(ventasColecction, e)
    };

    const initialStateVar = {
        nombre: "",
        email: "",
        telefono: 0,
      };
      const { control,formState, handleSubmit } =
        useForm({
          defaultValues: initialStateVar,
        });
      const { errors } = formState;
      useEffect(() => {
        console.log(errors);
      }, [errors]);

    return (
        <Grid container p={5} className="compra-container">
          <form onSubmit={handleSubmit(finalizarCompra)}>
          <div className="w-full" style={{ width: "500px" }}>
            <div>
              <Controller
                control={control}
                name="nombre"
                placeholder="Nombre y apellido"
                render={({ field, fieldState: { error }, formState }) => (
                  <>
                    <InputLabel>Nombre y Apellido:</InputLabel>
                    <Input fullWidth {...field} />
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="email"
                placeholder="email"
                render={({ field, fieldState: { error }, formState }) => (
                  <>
                    <InputLabel>Email:</InputLabel>
                    <Input fullWidth {...field} type="email" />
                  </>
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="telefono"
                placeholder="telefono"
                render={({ field, fieldState: { error }, formState }) => (
                  <>
                    <InputLabel>Telefono:</InputLabel>
                    <Input fullWidth {...field} type="number" />
                  </>
                )}
              />
            </div>
            <div className="d-flex justify-content-center">
                <Button
                  className="btn btn-success"
                  type="submit"
                  variant="outlined" size="medium" p={5}
                >
                  Concretar Comprar
                </Button>
            </div>
          </div>
        </form>
        </Grid>
    )
}

export default Compra