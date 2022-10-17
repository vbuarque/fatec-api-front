import { useState } from 'react';

import { ButtonDefault } from '../../components/ButtonDefault';
import { HeaderDefault } from '../../components/HeaderDefault';
import { Sidebar } from '../../components/Sidebar';
import StationHandlers from '../../integration/handlers/stationHandlers';
import THEME from '../../styles/theme';

import {
    Main,
    FormRegister,
    Fieldset,
    Legend,
    FormInput,
    FormButton
} from './styles';

export function StationRegister() {
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
            <HeaderDefault title='Cadastro de estação' />
            <Sidebar />
            <Main>
                <FormRegister onSubmit={(e: any) => {handleNewStation(e)}}>
                    <Fieldset>
                        <Legend>Nome da estação</Legend>
                        <label>
                            <FormInput placeholder='Digite o nome da estação' onChange={(e) => setName(e.target.value)}/>
                        </label>
                    </Fieldset>

                    <Fieldset>
                        <Legend>Data da instalação</Legend>
                        <label>
                            <FormInput placeholder='Digite a data da instalação' type='date' onChange={(e) => setInstallDate(e.target.value)}/>
                        </label>
                    </Fieldset>

                    <Fieldset>
                        <Legend>Latitude</Legend>
                        <label>
                            <FormInput placeholder='Digite a latitude da estação' onChange={(e) => setLat(e.target.value)}/>
                        </label>
                    </Fieldset>

                    <Fieldset>
                        <Legend>Longitude</Legend>
                        <label>
                            <FormInput placeholder='Digite a longitude da estação' onChange={(e) => setLon(e.target.value)}/>
                        </label>
                    </Fieldset>

                    <Fieldset>
                        <Legend>Referência</Legend>
                        <label>
                            <FormInput placeholder='Digite a referência da estação' onChange={(e) => setReference(e.target.value)}/>
                        </label>
                    </Fieldset>
                </FormRegister>
                <FormButton>
                    <ButtonDefault
                        title='Cadastrar'
                        widthButton='15rem'
                        heightButton='2.5rem'
                        backgroundButton={THEME.colors.green_100}
                        type = "submit"
                    />
                </FormButton>
            </Main>
        </>
    )
}