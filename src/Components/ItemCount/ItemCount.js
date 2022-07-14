import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';

const styles = { 
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
}

const ItemCount = ({initial, stock,onAdd}) => {

    const [contador,setContador] = useState(initial)

    

    const handlerClickSumar = () => {
        setContador(contador + 1);
    }

    const handlerClickRestar= () => {
        setContador(contador - 1); 
    }


    return(
        <>
            <div style={styles}>
                
                <Button 
                    variant="outlined"
                    aria-label="reduce"
                    disabled ={contador<=1} 
                    onClick={handlerClickRestar}
                >
                    <RemoveIcon fontSize="small" />
                </Button>
                <h2>{contador}</h2>
                <Button
                    variant="outlined"
                    aria-label="increase"
                    disabled={contador>=stock} 
                    onClick={handlerClickSumar}
                >
                    <AddIcon fontSize="small" />
                </Button>
                <Button variant="outlined" disabled={stock<=0} onClick={()=> onAdd(contador)}>Agregar al carrito</Button>    
            </div>
        </>
    )
}

export default ItemCount