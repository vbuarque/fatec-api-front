import { useEffect, useState } from "react";

import { ButtonDefault } from "../../components/ButtonDefault";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { URI } from "../../integration/uri";

import {Main,Table,TableTH,TableTD,TableTDButton} from "./styles";
import THEME from "../../styles/theme";

import axios from "axios";
import { IStation } from "../../integration/station";

export function StationList() {
  const [stationList, setStationList] = useState([]);

  function getStationData() {
    axios.get(URI.STATIONS)
    .then((response) => {
      setStationList(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getStationData();
  }, []);

  return (
    <>
     <HeaderDefault title="Lista das estações"/>
      <Sidebar />
    <Main>
     

      <Table>
        <thead>
          <tr>
            <TableTH>Código</TableTH>
            <TableTH>Nome da estação</TableTH>
            <TableTH>Localização</TableTH>
            <TableTH>Detalhes</TableTH>
          </tr>
        </thead>

        <tbody>
          {stationList.map((station:IStation) => (
            <tr key={station.id}>
              <TableTD>{station.id}</TableTD>
              <TableTD>{station.name}</TableTD>
              <TableTD>{station.reference}</TableTD>
              <TableTDButton>
              <ButtonDefault
                    title="Detalhes"
                    backgroundButton={THEME.colors.green_100}
                    widthButton={"184px"}
                    heightButton={"40px"}
                    hoverBackgroundButton={THEME.colors.green_50}
                />
              </TableTDButton>
            </tr>
          ))}
        </tbody>
      </Table>
    </Main>
    </>
  );
}
