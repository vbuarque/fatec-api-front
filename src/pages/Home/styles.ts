import { MapContainer } from 'react-leaflet';
import styled from 'styled-components';

export const StyledMapContainer = styled.div`
  margin: 6rem 1.5rem 0 17rem;
  padding: 0 0 2.375rem 0;
  border-bottom: 2px solid ${props => props.theme.colors.gray};
`;

export const StyledMap = styled(MapContainer)`
    width: 100%;
    height: 300px;
    border: 1px solid ${props => props.theme.colors.green_100};

    z-index: 5;

    border-radius: 0.5rem;
`;

export const Container = styled.div`
  margin: 0 1.5rem 0 17rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
`;