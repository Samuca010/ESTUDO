import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {StyleButton, StyleAdminExt, StyleListAdmin, StyleAdmin } from "../style";
import { BASE_URL } from '../constants/constants';
import useRequestData from '../hooks/useRequestData';
import * as MyRouters from "../Rotas/Coodinator";
import useProtectPage from "../hooks/useProtectPage";
import iconDetalhes from "../img/icon-doc.png"
import iconDelete from "../img/icon-remover.png"
import iconVoltar from "../img/icon-voltar.png"
import iconOk from "../img/icon-ok.png"
import iconLogout from "../img/icon-logout.png"

const AdminHomePage = () => {
  
  useProtectPage()

  const navigate = useNavigate();
////////////////////////////////////////////////////////////////////// DELETA VIAGEM

  const [data, isLoading, erro, reload, setReload] = useRequestData(`${BASE_URL}`)
  
    const delTrip = (id) => {
     axios.delete(`${BASE_URL}${id}`, {
      headers: { auth: localStorage.getItem("token") }
    })
      .then((response) => {
        alert("Viagem excluída!");
        setReload(!reload);
      })
      .catch((erro) => {
        console.log("Algo deu errado!")
      })
  }

  ////////////////////////////////////////////////////////////////////// BOTÃO LOGOUT

  const buttonLogout = () => {
    return (MyRouters.goToLogin(navigate),
      localStorage.clear()
    )
  }

  ////////////////////////////////////////////////////////////////////////// LISTA TRIPS

  const lista = data && data.map((viagem) => {
    return (
      < StyleListAdmin key={viagem.id}>
        <h2>{viagem.name}</h2>
        <button onClick={() => { MyRouters.goToDetails(navigate(viagem.id)) }}><img src={iconDetalhes}></img> Detalhes</button>
        <button onClick={() => { delTrip(viagem.id) }}><img src={iconDelete}></img> Delete</button>
      </StyleListAdmin>
    )
  })

  /////////////////////////////////////////////////////////////////////////////////////////
  return (
    <StyleAdminExt>
      <h1>Painel Administrativo</h1>
      <StyleAdmin>
        {isLoading && "Carregando..."}
        <>
          {!isLoading && data && lista}
        </>
        {!isLoading && !data && erro}
      </StyleAdmin>
      <StyleButton>
        <button onClick={() => MyRouters.goToLast(navigate)}><img src={iconVoltar}></img>  Voltar</button>
        <button onClick={() => MyRouters.goToCreateTrip(navigate)}><img src={iconOk}></img>  Criar Viagem</button>
        <button onClick={buttonLogout}><img src={iconLogout}></img>   Logout</button>
      </StyleButton>
    </StyleAdminExt>

  )
}

export default AdminHomePage;