import React from 'react'
import ReactStars from "react-rating-stars-component";

import restaurante from '../../assets/restaurante-fake.png'
import {Restaurante, RestauranteInfo, Title , Address, RestauranteFoto} from './style'


const RestauranteCard =() => {
    return(
        <Restaurante>
            <RestauranteInfo>
                <Title>Nome </Title>
                <ReactStars count={5}   isHalf value={4} edit={false} activeColor="#ffd700"/>
                <Address>Endereco</Address>
            </RestauranteInfo>
            <RestauranteFoto src={restaurante} slt='Foto Restaurante'/>
        </Restaurante>
    )
}

   
export default RestauranteCard