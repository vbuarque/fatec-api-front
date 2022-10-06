import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import { TileLayer, Marker, Popup } from "react-leaflet";
import { StyledMap, StyledMapContainer } from "./styles";

export default function Home() {
  return (
    <>
      <HeaderDefault title="Página inicial" />
      <Sidebar />
      <StyledMapContainer>
        <StyledMap
          center={[-23.163215837518646, -45.80887472167353]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </StyledMap>
      </StyledMapContainer>
    
    </>
  );
}
