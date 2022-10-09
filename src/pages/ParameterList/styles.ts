import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100%;

    margin: 7rem 0 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Content = styled.div``;

export const TitleContainer = styled.div``;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.green_100};
`;

export const ContainerButton = styled.footer`
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SHr = styled.hr`
    width: 85%;
    margin: 0.5rem 0;
 
    border: 2px solid ${props => props.theme.colors.gray};
    border-radius: 0.5rem;    
`;

export const Input = styled.input`
    width: 100%;
`;

export const ButtonTrash = styled.input`
    background: none;
    border: none;
`;
