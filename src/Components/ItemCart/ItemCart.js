import React,{ useContext} from "react";
import { cartContext } from "../../Context/CartContext";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemCart = ({product}) => {

    const {removeProduct} = useContext(cartContext);

    return (
        <div>
            <Card sx={{ display: 'flex', flexDirection:'row', alignItems:'center'}}>
           
                <CardMedia
                    component="img"
                    sx={{ width: 250 }}
                    image={product.img}
                    alt={product.title}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {product.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Descripcion : {product.description}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Cantidad: {product.cantidad}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Precio por unidad: {product.price}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Subtotal: {product.cantidad * product.price}
                    </Typography>
                    </CardContent>
                </Box>
        

                <IconButton aria-label="delete" size="large"
                    onClick={() => removeProduct(product.id)}>
                    <DeleteIcon fontSize="large" />
                </IconButton>
               
            </Card>
            {/* <img src={product.img} alt={product.title} />
            <div>
                <p>Titulo: {product.title}</p>
                <p>Candidad: {product.cantidad}</p>
                <p>Precio unidad : {product.price}</p>
                <p>Subtotal: ${product.cantidad * product.price}</p>
                
            </div> */}
        </div>
    )
}

export default ItemCart