import React from "react";
import { ContainerStats, InformationStats } from "./styleCardStats";

function CardStats(props) {
  const ListStats =
    props.dataPokemom &&
    props.dataPokemom.stats.map((item) => {
      return (
        <label key={item.stat.name}>
          {item.stat.name}: {item.base_stat}
        </label>
      );
    });
  return (
    <ContainerStats>
      <h2>Stats</h2>
      <InformationStats>{ListStats}</InformationStats>
    </ContainerStats>
  );
}
export default CardStats;
