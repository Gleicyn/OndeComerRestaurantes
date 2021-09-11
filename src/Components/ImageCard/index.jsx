import React from 'react';
import styled from 'styled-components';


export const Card = styled.div`
display: flex;
justify-content: center;
  min-width: 90px;
  height: 90px;
  border-radius: 8px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  
`;
const Title = styled.span`
  font-family: ${(props)=> props.theme.fonts.regular};
  color: #ffffff;
  font-size: 16px;
  margin-top: 5px;

`;

const ImageCard = ({photo,title}) => 
(<Card photo={photo}>
<Title>{title}</Title>
</Card>
)
export default ImageCard

