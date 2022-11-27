import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import TypeMaterial from '../../schemas/typeMaterial';
import CreateCard from '../../components/card';
import axios from 'axios';

import Grid from '@mui/material/Grid';
function Home(){
    const [typeMaterials,setTypeMaterials] = useState<TypeMaterial[]>([])

    useEffect(() => {
        axios.get("http://localhost:8080/type/material")
        .then((response) => {
            setTypeMaterials(response.data);
            
        })
    },[])

    return(
        <>
            <Typography 
            variant='h3' 
            sx={{
                mt: 10
            }}
            >
             ESCOLHA O TIPO DE MATERIAL 
            </Typography>
            <hr />
            <br />
            <br />
            <div>
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        typeMaterials.map(typeMaterial => {
                            return (
                                <Grid xs={2} sm={4} md={4} sx={{ mb: 5}}>
                                    <CreateCard 
                                        title={typeMaterial.name} 
                                        image={process.env.PUBLIC_URL + '/assets/images/Generic.png'} 
                                        link={"/materials/"+ typeMaterial.id} />
                                </Grid>
                            
                            )
                        })
                    }
                </Grid>
            </div>
            
            

        </> 
    )
}

export default Home;