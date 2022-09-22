import React from "react";
import { useNavigate } from "react-router-dom";
import { StyleButton, StyleList, StyleListExt } from "../style";
import { BASE_URL } from '../constants/constants';
import useRequestData from '../hooks/useRequestData';
import * as MyRouters from "../Rotas/Coodinator";
import iconInscr from "../img/icon-inscreva.png"
import iconVoltar from "../img/icon-voltar.png"

const ListTripsPage = () => {

const navigate = useNavigate();

//////////////////////////////////////////////////////////////////////////////////////////////////GET TRIPS

const [dataListTrips, isLoadingListTrips, erroListTrips] = useRequestData(`${BASE_URL}`)   

  const lista = dataListTrips && dataListTrips.map((perfil, index) => {
    return (
      <StyleList key={index}>
        <span><strong>Nome: </strong>{perfil.name}</span>
        <span><strong>Descrição: </strong>{perfil.description}</span>
        <span><strong>Planeta: </strong>{perfil.planet}</span>
        <span><strong>Duração: </strong>{perfil.durationInDays}</span>
        <span><strong>Data: </strong>{perfil.date}</span>
      </StyleList>

    )
  })
  ///////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <StyleListExt>
      <h1>Lista de viagens</h1>
      <StyleList>
        {isLoadingListTrips && "Carregando..."}
        {!isLoadingListTrips && dataListTrips && lista}
        {!isLoadingListTrips && !dataListTrips && erroListTrips}
      </StyleList>
      <StyleButton>
      <button type="button" onClick={() => MyRouters.goToForm(navigate)}><img src={iconInscr}></img>  Inscreva-se</button>
      <button type="button" onClick={() => MyRouters.goToLast(navigate)}><img src={iconVoltar}></img> Voltar</button>
      </StyleButton>
    </StyleListExt>
  )
}

export default ListTripsPage;