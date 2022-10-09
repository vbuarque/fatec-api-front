import { HeaderDefault } from "../../components/HeaderDefault";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Container, ContainerButton, Content, TitleContainer, Title, SHr, Input, ButtonTrash } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export function ParameterList() {
    return (
        <>
            <HeaderDefault title="Estação | 0001" />
            <Container>
                <TitleContainer>
                    <Title>Sensores da estação Fatec 0001</Title>
                    <SHr />
                </TitleContainer>
                <Content>
                    <label htmlFor="">
                        <Input type="checkbox" />
                        One
                        <ButtonTrash>
                            <FontAwesomeIcon icon={faTrash} />
                        </ButtonTrash>
                    </label>
                </Content>
            </Container>
            <ContainerButton>

            </ContainerButton>
        </>
    )
}