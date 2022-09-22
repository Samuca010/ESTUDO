import React from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { useForm } from "../hooks/useForm"
import { useNavigate } from "react-router-dom";
import { StyleButton, StyleFormExt } from "../style";
import useProtectPage from "../hooks/useProtectPage";
import * as MyRouters from "../Rotas/Coodinator";
import iconVoltar from "../img/icon-voltar.png"
import iconOK from "../img/icon-ok.png"

const CreateTripPage = () => {

    const [form, onChange, clear] = useForm({ name: "", planet: "", date: "", description: "", durationInDays: "" })

    useProtectPage()
    const navigate = useNavigate();

    const body = {
        "name": form.name,
        "planet": form.planet,
        "date": form.date,
        "description": form.description,
        "durationInDays": form.durationInDays
    }

    const createTrip = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL}`, body,
            {
                headers: { auth: localStorage.getItem("token") }
            })
            .then((response) => {
                alert("Confira sua viagem criada...")
                 MyRouters.goToList(navigate);
                console.log(response.data);
            }).catch((error) => {
               alert(error)
            })
        clear();
            
    }

    return (
        <StyleFormExt onSubmit={createTrip}>
            <h1>Criar viagem</h1>
            <label htmlFor="name">Nome: </label>
            <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="nome da viagem"
                value={form.name}
                onChange={onChange}
                pattern="^.{5,}$"
               
            />
            <label htmlFor="planet">Planeta: </label>
           <select
                id="planet"
                name="planet"
                required
                value={form.planet}
                onChange={onChange}
            >
                <option value="">escolha um planeta...</option>
                <option value="Júpiter">Júpiter</option>
                <option value="Marte">Marte</option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Netuno">Netuno</option>
                <option value="Saturno">Saturno</option>
                <option value="Terra">Terra</option>
                <option value="Urano">Urano</option>
                <option value="Vênus">Vênus</option>
            </select>
            <label htmlFor="date">Data: </label>
            <input
                id="date"
                name="date"
                type="date"
                required
                value={form.date}
                onChange={onChange}
                min={"01/01/2023"} 
            />
            <label htmlFor="description">Descrição: </label>
            <input id="description"
                name="description"
                type="text"
                required
                placeholder="digite seu texto"
                value={form.description}
                onChange={onChange}
                pattern="^.{30,}$"
            />
            <label htmlFor="durationInDays">Duração em dias: </label>
            <input id="durationInDays"
                name="durationInDays"
                type="number"
                required
                placeholder="dias de viagem"
                value={form.durationInDays}
                onChange={onChange}
                min={50}
            />
            <StyleButton>
            <button type="button" onClick={() => MyRouters.goToLast(navigate)}><img src={iconVoltar}></img> Voltar</button>
            <button><img src={iconOK}></img> Criar</button>
            </StyleButton>
        </StyleFormExt>
    )
}

export default CreateTripPage;