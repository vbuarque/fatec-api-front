import { HeaderDefault } from '../../components/HeaderDefault';
import { Sidebar } from '../../components/Sidebar';
import { StationForm } from '../../components/StationRegisterForm';

import { Main, Footer, Container } from './styles';

export function StationRegister(){
    return(
        <Container>
            <HeaderDefault title='Cadastro de estação'/>
            <Sidebar/>
            <Main>
                <StationForm />
            </Main>
            <Footer>
            </Footer>
        </Container>
    )
}