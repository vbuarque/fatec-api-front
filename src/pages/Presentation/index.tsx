import {
  Container,
  Menu,
  Logo,
  ButtonLogin,
  MainContent,
  Content,
  Title,
  Subtitle,
  ContainerButton,
  ButtonAccess,
  ButtonDoc
} from "./styles";

import LogoMenu from "../../assets/images/logosubtitle.png";

export function Presentation() {

  return (
    
      <Container>
        <Menu>
          <Logo src={LogoMenu} alt="logo" />
          <ButtonLogin to="/login">
            Login
          </ButtonLogin>
        </Menu>

        <MainContent>
            <Content>
                <Title>Convecção</Title>
                <Subtitle>Plataforma de disseminação de dados.</Subtitle>
            </Content>
            <ContainerButton>
                <ButtonAccess to="/register">Acessar</ButtonAccess>
                <ButtonDoc href="https://app.swaggerhub.com/apis-docs/Nathtruyts/Conveccao/1.0" target="_blank">Documentação</ButtonDoc>
            </ContainerButton>
        </MainContent>
      </Container>
  );
}

        // <Main>
        //   <Title>Convecção</Title>
        //   <Subtitle>Plataforma de disseminação de dados.</Subtitle>
        //   <AreaButton>
        //     <ButtonLink to="/dashboard">
        //       <ButtonDoc>ACESSAR</ButtonDoc>
        //     </ButtonLink>
        //     <a href="https://app.swaggerhub.com/apis-docs/Nathtruyts/Conveccao/1.0">
        //       <ButtonAcess>DOCUMENTAÇÃO</ButtonAcess>
        //     </a>
        //   </AreaButton>
        // </Main>;