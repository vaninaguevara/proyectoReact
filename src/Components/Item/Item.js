import React,{ useContext } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import imagenD from './../../assets/default-image.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

const Item = ({info}) => {

    const nombre = useContext(cartContext);

    return (
        <div>
            <Link to={`/detalle/${info.id}`} >
            {/* <Grid item xs={12}> */}
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt=""
                            height="100"
                            image={imagenD}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {info.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Precio: {info.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Ver Detalle del producto</Button>
                        </CardActions>
                    </Card>
                
            {/* </Grid> */}
            </Link>
        </div>
    )
}

export default Item