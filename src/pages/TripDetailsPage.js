import { useNavigate, useParams } from "react-router-dom"
import useProtectPage from "../hooks/useProtectPage"
import axios from "axios"
import { BASE_URL_LIST, BASE_URL } from "../constants/constants"
import { useEffect, useState } from "react"
import * as MyRouters from "../Rotas/Coodinator"
import { StyleTrip, StyleTripCand, StyleTripExt } from "../style.js"
import iconVoltar from "../img/icon-voltar.png"

const TripDetailsPage = ({ reload, setReload }) => {

    useProtectPage()
    
    const navigate = useNavigate()
    const pathParams = useParams()
    const [tripDetails, setTripDetails] = useState({})
    const [isLoading, setIsLoading] = useState(undefined)
    const [error, setError] = useState(undefined)

    const approve = (candidate) => {
        axios.put(`${BASE_URL}${pathParams.id}/candidates/${candidate.id}/decide`, {
            "approve": true
        }, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setReload(!reload)
            })
            .catch((er) => {
                alert(er.response.data.message)
            })
    }

    const reprove = (candidate) => {
        axios.put(`${BASE_URL}${pathParams.id}/candidates/${candidate.id}/decide`, {
            "approve": false
        }, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setReload(!reload)
            })
            .catch((error) => {
                alert(error.response.data.message)
            })
    }

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${BASE_URL_LIST}${pathParams.id}`, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((response) => {
                setIsLoading(false)
                setTripDetails(response.data.trip)
            })
            .catch((er) => {
                setIsLoading(false)
                setError(er.response.data.message)
            })
    }, [])

    const candidates = tripDetails.candidates && tripDetails.candidates.map((person, index) => {
        return <div key={index}>
            <StyleTrip>
                <h2>{person.name}</h2>
                <span>Profissão: {person.profession}</span>
                <span>Idade: {person.age}</span>
                <span>País: {person.country}</span>
                <span>Texto: {person.applicationText}</span>
            </StyleTrip>
            <div>
                <button onClick={() => { approve(person) }}>Aprovar</button>
                <button onClick={() => { reprove(person) }}>Reprovar</button>
            </div>
        </div>
    })
    console.log(candidates)

    const approvedCandidates = tripDetails.candidates && tripDetails.approved.map((candidate, index) => {
        return <div key={index}>
            <h2>{candidate.name}</h2>
        </div>
    })

    return (
        <StyleTripExt>
            <h1>Detalhes</h1>
            <StyleTripCand>
                {isLoading && "...Carregando"}
                {!isLoading && tripDetails &&
                    <StyleTrip>
                        <h2>{tripDetails.name}</h2>
                        <span>{tripDetails.description}</span>
                        <span>Destino: {tripDetails.planet}</span>
                        <span>Duração: {tripDetails.durationInDays}</span>
                        <span>Data: {tripDetails.date}</span>
                    </StyleTrip>}
                {!isLoading && !tripDetails && error}
            </StyleTripCand>
            <h1>Aprovados</h1>
            <StyleTripCand>
                {approvedCandidates}
            </StyleTripCand>
            <h1>Candidatos</h1>
            <StyleTripCand>
                {candidates}
            </StyleTripCand>
            <StyleTrip>
                <button onClick={() => MyRouters.goToLast(navigate)}><img src={iconVoltar}></img>  Voltar</button>
            </StyleTrip>
        </StyleTripExt>

    )
}
export default TripDetailsPage;

