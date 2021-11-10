import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurante ,  RestauranteInfo , Title , Address , RestaurantPhoto} from './styles';

const RestauranteCard = ({restaurant}) => <Restaurante>
    <RestauranteInfo> 
        <Title>{restaurant.name}</Title>
        <ReactStars count={5} isHalf edit={false} value={restaurant.rating} activeColor="#ffd700"> </ReactStars>
        <Address>{restaurant.vicinity || restaurant.formatted_address } </Address>

    </RestauranteInfo>
    <RestaurantPhoto src={restaurant.photos ? restaurant.photos[0].getUrl(): restaurante}  alt="Foto do restaurante" ></RestaurantPhoto>
</Restaurante>

export default RestauranteCard; 