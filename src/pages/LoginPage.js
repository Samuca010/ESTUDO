import React from "react";
import axios from "axios";
import { useForm } from "../hooks/useForm"
import { BASE_URL_LOGIN } from "../constants/constants"
import { useNavigate } from 'react-router-dom';
import { StyleButton, StyleLoginExt } from "../style";
import * as MyRouters from "../Rotas/Coodinator";
import iconVoltar from "../img/icon-voltar.png"
import iconOk from "../img/icon-ok.png"

const LoginPage = () => {

    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const navigate = useNavigate()

    const fazerLogin = (event) => {
        event.preventDefault()
        axios.post(`${BASE_URL_LOGIN}`, form)
            .then((response) => {
                console.log(response.data)
                localStorage.setItem("token", response.data.token)
                MyRouters.goToAdmin(navigate)
            })
            .catch((error) => console.log(error.message))
        localStorage.removeItem("token")                                       //fazer logout
        clear();
    }
    return (
        <StyleLoginExt >
            <h1>LOGIN</h1>
            <label htmlFor="email">E-mail: </label>
            <input
                id="email"
                name="email"
                type="email"
                placeholder="email@email.com.br"
                value={form.email}
                onChange={onChange}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <label htmlFor="password">Senha: </label>
            <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="******"
                value={form.password}
                onChange={onChange}
                pattern="^.{3,}$"
            />
            <StyleButton>
                <button type="button" onClick={fazerLogin}><img src={iconOk}></img> Login</button>
                <button type="button" onClick={() => MyRouters.goToHome(navigate)}><img src={iconVoltar}></img> Voltar</button>
            </StyleButton>
        </StyleLoginExt>
    )
}

export default LoginPage;