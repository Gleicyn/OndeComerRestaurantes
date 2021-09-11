import styled from 'styled-components';

export const Restaurante = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 5px;
  padding: 16px;
  background-color: #ffffff;
  border-left: 5px solid transparent;
  :hover {
    background-color: #00000021;
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestauranteInfo = styled.div`
 display: flex;
  flex-direction: column;
`

export const Title =styled.div`
font-family:  Roboto, sans-serif;
color: ${(props) => props.theme.colors.text};
font-size: 24px;
font-weight: bold;
line-height: 29px;
margin-bottom: 10px;
`
export const Address = styled.span`
font-family:  Roboto, sans-serif;
color: ${(props) => props.theme.colors.text};
font-size: 16px;
line-height: 19px;
margin-bottom: 10px;
margin-top: 10px;
`
export const RestauranteFoto = styled.img`
width: 100px;
height: 100px;
border-radius: 6px;
object-fit: cover;
`
