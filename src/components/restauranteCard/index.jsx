import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurante ,  RestauranteInfo , Title , Address , RestaurantPhoto} from './styles';

const RestauranteCard = () => <Restaurante>
    <RestauranteInfo> 
        <Title> Nome do Restaurante</Title>
        <ReactStars count={5} isHalf edit={false} value={4} activeColor="#ffd700"> </ReactStars>
        <Address> Endereço </Address>

    </RestauranteInfo>
    <RestaurantPhoto src={restaurante} alt="Foto do restaurante" ></RestaurantPhoto>
</Restaurante>

export default RestauranteCard; 