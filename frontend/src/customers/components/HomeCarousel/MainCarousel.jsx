import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';


const items = MainCarouselData.map( (items)=>
    <img style={{zIndex:'0'}} className='cursor-pointer -z-10' role="presentation" src={items.image} alt="" />
)

const MainCarousel = () => (
    <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
);

export default MainCarousel;