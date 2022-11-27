import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CreateCard from '../../../components/card';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Material from '../../../schemas/material';

function Materials(){

    const {id} = useParams();
    const [materials,setMaterials] = useState<Material[]>([])

    useEffect(() => {
        axios.get("http://localhost:8080/material/type/"+id)
        .then((response) => {
            setMaterials(response.data)
            
        })
    })

    return(
        <>
            <Typography 
            variant='h3' 
            sx={{
                mt: 10
            }}
            >
             MATERIAIS
            </Typography>
            <hr />
            <br />
            <br />
            <div>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        materials.map(material => {
                            return (
                                <Grid xs={2} sm={4} md={4} sx={{ mb: 5}} key={material.id}>
                                    <CreateCard 
                                        title={material.name} 
                                        image={process.env.PUBLIC_URL + '/assets/images/Generic.png'} 
                                        link={"/#/"+ material.id} />
                                </Grid>
                            
                            )
                        })
                    }
                </Grid>
            </div>
            
            

        </> 
    )
}

export default Materials;