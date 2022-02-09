import React from "react"; 
import {Container} from '@material-ui/core';
import Navbar from "./components/Navbar/Navbar.js"; 
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './components/Auth/Auth';
import About from "./components/About.js";


const App = () => {
    return(
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home/>}/>
                    <Route path='/auth' exact element={<Auth/>}/>
                    <Route path='/about' exact element = {<About/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
        
    )
}

export default App;