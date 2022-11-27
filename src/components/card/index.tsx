import React from "react";
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface Props {
    title:string,
    image:string,
    link:string
}
function CreateCard(props: Props){
    const {title, image, link} = props;

    return(
        <>
            <Link to={link}>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="400"
                        image={image}
                        alt=""
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center'}}>
                            {title} 
                        </Typography>
                        
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Link>
        </>
        
        
    )
}


export default CreateCard;