import React,{useEffect, useState} from 'react'
import axios from "axios";

const useRequestData = (url) => {  //url completa
    
    const [data, setData] = useState(undefined)  //undefined, pois não sei o que vai ser
    const [isLoading, setIsLoading] = useState(undefined)
    const [erro, setErro] = useState(undefined)
    const [reload, setReload] = useState(undefined)
    useEffect(() => {
        setIsLoading(true);                 //carregando
        axios.get(url)
        .then(response =>{
          setIsLoading(false);            // a requesição chega, não está mais carregando
          setData(response.data.trips)
        }).catch(error =>{
          setIsLoading(false)             //deu erro, para de carregar
          setErro(error)                    //mensagem de erro
        })
      }, [reload])

    return (
      [data, isLoading, erro, reload, setReload]
    )
}

export default useRequestData;