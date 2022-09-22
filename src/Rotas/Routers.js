import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminHome from '../pages/AdminHomePage';
import ApplicationForm from '../pages/ApplicationFormPage';
import CreateTrip from '../pages/CreateTripPage';
import Home from '../pages/HomePage';
import Login from '../pages/LoginPage';
import ListTrips from '../pages/ListTripsPage';
import TripDetails from '../pages/TripDetailsPage';

const Routers = ({dataTrips, isLoadingTrips, errorTrips, reload, setReload})=> {
        return (
        <>
    <BrowserRouter>
        <Routes>
            <Route index element={ <Home /> } />
            <Route path="/login" element={<Login/>}/>
            <Route path="/trips/list" element={<ListTrips dataTrips={dataTrips} isLoadingTrips={isLoadingTrips} errorTrips={errorTrips}/>}/>
            <Route path="/admin/trips" element={ <AdminHome dataTrips={dataTrips} isLoadingTrips={isLoadingTrips} errorTrips={errorTrips} reload={reload} setReload={setReload}/> }/>
            <Route path="/trips/application/" element={<ApplicationForm dataTrips={dataTrips}/>}/>
            <Route path="/admin/trips/create" element={<CreateTrip reload={reload} setReload={setReload}/>}/>
            <Route path="/admin/trips/:id" element={<TripDetails reload={reload} setReload={setReload}/>}/>
        </Routes>
    </BrowserRouter>
    </>
        )
    }
export default Routers;