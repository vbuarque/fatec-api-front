import styled from "styled-components";
import THEME from "../../styles/theme";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 25rem;
  height: 28rem;
  margin: 14rem auto auto auto;
  padding:20px;

  background-color: ${THEME.colors.white_100};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  @media (max-width: 954px) {
    margin: 14rem auto auto 20rem;
  }
  @media (max-width: 768px) {
    margin: 14rem auto auto auto;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  width: 100%;
  margin: 0 0 1rem 0;
`;

export const Legend = styled.legend`
  font-size: 1rem;
  font-weight: 700;
  color: ${THEME.colors.blue_100};
  margin-bottom: 0.75rem;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0.5rem;

  background: none;

  border: 1px solid ${THEME.colors.green_100};
  border-radius: 4px;

  outline: none;
  
  font-size: 1rem;
  font-weight: 400;
  color: ${THEME.colors.black};

  &::placeholder {
    color: ${THEME.colors.gray};
  }
`;

export const FormButton = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1rem;
  padding: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;