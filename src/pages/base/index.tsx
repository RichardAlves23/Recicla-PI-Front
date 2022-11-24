import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../home';
import Materials from '../materials';
import CollectionPoints from '../collectionPoints';
function Base(){

    return(
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/materials" element={<Materials />} />
                        <Route path="/collectionpoints" element={<CollectionPoints />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        </React.Fragment>
    )
}

export default Base