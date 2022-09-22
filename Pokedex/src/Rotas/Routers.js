import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/home.js';
import Pokedex from '../pages/Pokedex/pokedex';
import Detalhes from '../pages/Details/details';

const Routers = ({dataPock, isLoadingPock, errorPock, reload, setReload})=> {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokedex" element={<Pokedex dataPock={dataPock} isLoadingPock={isLoadingPock} errorPock={errorPock} />} />
                    <Route path="/details/:id" element={<Detalhes dataPock={dataPock} isLoadingPock={isLoadingPock} errorPock={errorPock} />} />
                </Routes>
            </BrowserRouter>
       )
    }
export default Routers;