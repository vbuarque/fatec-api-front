import { useState } from 'react';
import StationHandlers from '../../integration/handlers/stationHandlers';

import { ButtonDefault } from "../../components/ButtonDefault";
import { HeaderDefault } from "../../components/HeaderDefault";
import { Sidebar } from "../../components/Sidebar";
import THEME from "../../styles/theme";

import { 
  Main,
  TopDiv,
  Title,
  Description,
  StyledHR,
  FormDetails,
  Fieldset,
  Legend,
  Input,
  TextBox,
  FieldsetTextBox,
  ButtonDiv
} from "./styles";

export function StationDetails() {
  const [name, setName] = useState('')
    const [installDate, setInstallDate] = useState('')
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [reference, setReference] = useState('')

    let station = {
        installation_date: installDate,
        name: name,
        lat: lat,
        lon: lon,
        reference: reference
    }

    let stationHandlers = new StationHandlers()

    const handleNewStation = async(e:any) => {
        e.preventDefault()

        try{
            stationHandlers.handleNewStation(station)
            e.target.reset()
            console.log(station)
        } catch (err){
            console.log(err)
        }
    }

  return (
    <>
      <HeaderDefault title="Detalhes da estação" />
      <Sidebar /> 
      <Main>
        <TopDiv>
          <Title>Estação Fatec 0001</Title>
          <Description>Data de criação: 31/05/2022</Description>
          <StyledHR />
        </TopDiv>

        <FormDetails>
          <Fieldset>
            <Legend>Nome da estação</Legend>
            <Input value='Estação Fatec' onChange={(e) => setName(e.target.value)} disabled/>
          </Fieldset>

          <Fieldset>
            <Legend>Data da instalação</Legend>
            <Input value='31/05/2022' type='date' onChange={(e) => setInstallDate(e.target.value)} disabled/>
          </Fieldset>

          <Fieldset>
            <Legend>Referência</Legend>
            <Input value='Referência XYZ' onChange={(e) => setLat(e.target.value)} disabled/>
          </Fieldset>

          <Fieldset>
            <Legend>Tipo</Legend>
            <Input value='Tipo da estação XYZ' onChange={(e) => setLon(e.target.value)} disabled/>
          </Fieldset>

          <FieldsetTextBox>
            <Legend>Observações</Legend>
            <TextBox value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec sem arcu. Nunc lacinia ut ante eget auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae elit felis. Vestibulum aliquet nisi at consectetur euismod. Pellentesque vitae dolor sed neque ultricies dignissim. Nulla pulvinar interdum tristique. Donec ut nisi sit amet odio bibendum sollicitudin id sit amet augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec sem arcu. Nunc lacinia ut ante eget auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae elit felis." onChange={(e) => setReference(e.target.value)} disabled/>
          </FieldsetTextBox>
        </FormDetails>

        <ButtonDiv>
          <ButtonDefault title="Editar informações" widthButton="250px" backgroundButton={THEME.colors.green_100} hoverBackgroundButton={THEME.colors.green_50}/>
          <ButtonDefault title="Visualizar sensores" widthButton="250px" backgroundButton={THEME.colors.green_100} hoverBackgroundButton={THEME.colors.green_50}/>
        </ButtonDiv>
      </Main>
    </>
  );
}
