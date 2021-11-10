import React, { useState } from 'react';
import logo from '../../assets/logo.svg'
import {Container , Search , Logo, Wrapper ,  CarouselTittle , Carousel} from './styles'
import TextField, {Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon/';
import restaurante from '../../assets/restaurante-fake.png';
import { Card , RestauranteCard , Modal , Map} from '../../components';

const Home = () => {

    const [inputValue,setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [ modalOpened , setModalOpened ] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    }

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            setQuery(inputValue);
        }
    }

    return(
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="Logo do Restaurante"></Logo>
                    <TextField label="Pesquisar Restaurantes"  outlined 
                        // onTrailingIconSelector={() => this.setState({value: ''})} 
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                        <Input value={inputValue}  onKeyPress={handleKeyPress} onChange={(e) => setInputValue(e.target.value)}/>
                    </TextField> 
                    <CarouselTittle> Na sua Área </CarouselTittle>
                    <Carousel {...settings}>
                        <Card photo={restaurante} title="teste"/>
                        
                    </Carousel>
                    <button onClick={() => setModalOpened(true)}> teste  </button>
                </Search>
                <RestauranteCard>
                    
                </RestauranteCard>
            </Container>
            <Map query={query}> </Map>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}></Modal>
        </Wrapper>

    )
}
export default Home;