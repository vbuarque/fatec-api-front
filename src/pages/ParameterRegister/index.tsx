import { useState } from 'react';
import { ButtonDefault } from '../../components/ButtonDefault';

import {HeaderDefault} from '../../components/HeaderDefault';
import { Sidebar } from '../../components/Sidebar';
import ParameterHandlers from '../../integration/handlers/parameterHandlers';

import THEME from '../../styles/theme';

import {
    Main,
    FormRegister,
    Fieldset,
    Legend,
    FormInput,
    FormButton
} from './styles';

export function ParameterRegister(){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [unit, setUnit] = useState('')
    const [factor, setFactor] = useState(0)
    const [offset, setOffset] = useState(0)

    let parameter = {
        name: name,
        description: description,
        unit1: unit,
        factor1: factor,
        offset1: offset
    }

    let parameterHandlers = new ParameterHandlers()

    const handleNewParameter = async(e: any) => {
        e.preventDefault()

        try {
            parameterHandlers.handleNewParameter(parameter)
            e.target.reset()
            console.log(parameter)
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <>
            <HeaderDefault title='Cadastro de parâmetros'/>
            <Sidebar/>
            <Main>
                <FormRegister onSubmit={(e:any) => handleNewParameter(e)}>
                    <Fieldset>
                        <Legend>Nome do parâmetro</Legend>
                        <label>
                            <FormInput placeholder='Digite o nome do parâmetro' onChange={(e:any) => setName(e.target.value)}/>
                        </label>
                    </Fieldset>

                    <Fieldset>
                        <Legend>Descrição</Legend>
                        <label>
                            <FormInput placeholder='Digite a data da instalação' onChange={(e:any) => setDescription(e.target.value)}/>
                        </label>
                    </Fieldset>

                    <Fieldset>
                        <Legend>Unidade</Legend>
                        <label>
                            <FormInput placeholder='(ml³ / °C / km / etc)' onChange={(e:any) => setUnit(e.target.value)}/>
                        </label>
                    </Fieldset>

                    <Fieldset>
                        <Legend>Offset</Legend>
                        <label>
                            <FormInput placeholder='Digite a margem de erro' onChange={(e:any) => setOffset(e.target.value)}/>
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