import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CarImages from "../../components/CardImagesDetails/CardImages";
import CardMoves from "../../components/CardMovesDetails/CardMoves";
import CardStats from "../../components/CardStatsDetails/CardStats";
import Headers from "../../components/Headers/Headers";
import { BASE_URL } from "../../Constants/Constants";
import useRequestData from "../../hooks/useRequestData";
import * as MyRouters from "../../Rotas/Coodinator"
import { ContainerBody } from "./style";

function Details() {

    const navigate = useNavigate();
    const pathParams = useParams();
    const idPokemom = pathParams.id;
    const [data, isLoading] =
        useRequestData(`${BASE_URL}` + idPokemom);

    return (
        <>
            <Headers
                title={!isLoading && data && data.name}
                button={<button onClick={() => MyRouters.goToHome(navigate)}>Voltar</button>}
            />
            <ContainerBody>
                {!isLoading && data && <CarImages dataPokemom={data} />}
                {!isLoading && data && <CardStats dataPokemom={data} />}
                {!isLoading && data && <CardMoves dataPokemom={data} />}
            </ContainerBody>
        </>
    )
}
export default Details;