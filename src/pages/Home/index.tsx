import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";

import CardStation from "../../components/CardStation";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { TileLayer, Marker, Popup } from "react-leaflet";
import {
  StyledMap,
  StyledMapContainer,
  LoadingContainer,
  Container
} from "./styles";

import FatecImg from "../../assets/images/fatecImg.jpg";
import EscolaImg from "../../assets/images/escolaImg.png";

import L from "leaflet";
import StationIcon from "../../assets/icons/satelliteIcon.svg";

const markerIcon = new L.Icon({
  iconUrl: StationIcon,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -10],
});

export function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <HeaderDefault title="Página inicial" />
      <Sidebar />
      <StyledMapContainer>
        {isLoading ? (
          <StyledMap
            center={[-23.189039728140184, -45.858742249177915]}
            zoom={11}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[-23.161988503955893, -45.79545307838915]}
              icon={markerIcon}
            >
              <Popup>
                <strong>Estação Fatec</strong>
              </Popup>
            </Marker>

            <Marker
              position={[-23.248023742957955, -45.9220273597218]}
              icon={markerIcon}
            >
              <Popup>
                <strong>Estação E.E. Prof° Elmano Ferreira Veloso</strong>
              </Popup>
            </Marker>
          </StyledMap>
        ) : (
          <LoadingContainer>
            <CircularProgress color="success" variant="indeterminate" />
          </LoadingContainer>
        )}
      </StyledMapContainer>

      <Container>
        {isLoading ? (
          <CardStation
            stationName="Estação Fatec"
            stationImage={FatecImg}
            stationInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris sapien, vestibulum mollis ultrices dapibus, ornare ut nunc. Nunc tempus nunc massa, et molestie urna viverra ut. Cras feugiat est in ligula auctor scelerisque. Integer et ullamcorper dolor. Mauris consectetur tellus a dui pharetra, ut luctus velit pretium."
          />
        ) : (
          <LoadingContainer>
            <CircularProgress color="success" variant="indeterminate" />
          </LoadingContainer>
        )}

        {isLoading ? (
          <CardStation
            stationName="Estação Escola"
            stationImage={EscolaImg}
            stationInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris sapien, vestibulum mollis ultrices dapibus, ornare ut nunc. Nunc tempus nunc massa, et molestie urna viverra ut. Cras feugiat est in ligula auctor scelerisque. Integer et ullamcorper dolor. Mauris consectetur tellus a dui pharetra, ut luctus velit pretium."
          />
        ) : (
          <LoadingContainer>
            <CircularProgress color="success" variant="indeterminate" />
          </LoadingContainer>
        )}
      </Container>
    </>
  );
}


