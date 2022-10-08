import { Divider } from "@mui/material";
import { HeaderDefault } from "../../components/HeaderDefault";

import {Container,ContainerButton,Content,TitleContainer,Title} from "./styles";
export function ParameterList() {
    return (
        <>
        <HeaderDefault title="Estação | 0001"/>
        <Container>
            <TitleContainer>
                <Title>Sensores da estação Fatec 0001</Title>
            </TitleContainer>
            <Divider variant="inset" />
            <Content>

            </Content>
        </Container>
        <ContainerButton>

        </ContainerButton>
        </>
    )
}