import React, {useState} from 'react'
import Slider from 'react-slick'
import TextField,{Input } from '@material/react-text-field'
import MaterialIcon from '@material/react-material-icon'
import Logo from '../../assets/Logo.png'
import restaurante from '../../assets/restaurante-fake.png'
import ImageCard from '../../Components/ImageCard' 
import { RestauranteCard,Modal } from '../../Components'

import {Container, Search, Wrapper , Map, CarouseTitle, Carousel} from './style'
const Home = () =>{
    const [inputValue, setInputValue] = useState('')
    const [modalOpened, setModalOpened] = useState(false)
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiHeight: true,
      };
      
    return(
        <Wrapper>
            <Container>
                <Search>
                <img src={Logo} alt="Logo" ></img> 
                <TextField label="Pesquisar Restaurantes" outlined
                trailingIcon={<MaterialIcon role="button" icon="search"/>}>
                    <Input value ={inputValue} onChange={(e) => setInputValue(e.target.value)}
                    />

                </TextField>
                <CarouseTitle>Na sua Área</CarouseTitle>
                <Carousel {...settings}>
                    <ImageCard photo={restaurante} title="nome x"/>
                    <ImageCard photo={restaurante} title="nome x"/>
                    <ImageCard photo={restaurante} title="nome x"/>
                    <ImageCard photo={restaurante} title="nome x"/>
                    <ImageCard photo={restaurante} title="nome x"/>
                    <ImageCard photo={restaurante}title="nome x"/>
                </Carousel>
                <button onClick={()=> setModalOpened(true)}>Abrir modal</button>
                </Search>
                <RestauranteCard/>
            </Container>
            <Map/>
            <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/>
        </Wrapper>
    )
}
export default Home