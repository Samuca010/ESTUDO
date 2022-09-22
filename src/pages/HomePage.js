import React from "react";
import { useNavigate } from "react-router-dom";
import { StyleHomeExt } from "../style";
import logo from "../img/logo.jpg"
import * as MyRouters from "../Rotas/Coodinator";
import iconAdmin from "../img/icon-config.png"
import iconVer from "../img/icon-ver.png"

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <StyleHomeExt>
      <img src={logo} alt="Logo Labex"></img>
      <h1>Aqui, o céu não é o limite!</h1>
      <button onClick={() => MyRouters.goToLogin(navigate)}><img src={iconAdmin}></img> Area do Administrador</button>
      <button onClick={() => MyRouters.goToList(navigate)}><img src={iconVer}></img> Ver Viagens</button>
    </StyleHomeExt>
  )
}

export default HomePage;