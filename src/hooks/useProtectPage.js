import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import * as MyRouters from "../Rotas/Coodinator"

const useProtectPage = () => {
    
    const navigate = (useNavigate)
        useEffect(()=>{
            const token=localStorage.getItem("token")
                if (!token){                        //se for diferente do toke, volta pra tela Login
                    MyRouters.goToLogin(navigate)
                    alert("Email ou senha inválido!")                
                }
        },[])
}

export default useProtectPage;