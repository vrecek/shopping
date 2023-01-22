import { SlideType } from '@/interfaces/HomeInterfaces'
import HeaderWrapper from './HeaderWrapper'
import MovingContainer from './MovingContainer'
import SliderButtons from './SliderButtons'
import slide1 from '../../../images/slide1.jpg'
import slide2 from '../../../images/slide2.jpg'
import slide3 from '../../../images/slide3.jpg'
import React from 'react'


const HomeHeader = () => {
    const [sliderInterval, setSliderInterval] = React.useState<NodeJS.Timer | null>(null)
    
    const slides: SlideType[] = [
        {
            image: slide1.src, 
            buttonText: 'Explore offer', 
            buttonUrl: '/', 
            header: 'Get our newest prestige jackets', 
            para: 'Morbi sagittis consequat mauris sit amet suscipit. Donec commodo congue nibh sodales convallis. Nunc bibendum vitae purus blandit semper'
        },
        {
            image: slide2.src, 
            buttonText: 'Explore offer', 
            buttonUrl: '/', 
            header: 'Best classic outfit', 
            para: 'Curabitur condimentum, turpis a condimentum eleifend, turpis massa commodo turpis, non mattis justo massa in nibh'
        },
        {
            image: slide3.src, 
            buttonText: 'Explore offer', 
            buttonUrl: '/', 
            header: 'Limited brand new shoe collection', 
            para: 'Morbi sagittis consequat mauris sit amet suscipit. Donec commodo congue nibh sodales convallis. Nunc bibendum vitae purus blandit semper'
        },
    ]


    return (
        <HeaderWrapper>

            <MovingContainer 
                setSliderInterval={setSliderInterval} 
                slides={slides} 
            />

            <SliderButtons 
                setSliderInterval={setSliderInterval} 
                sliderInterval={sliderInterval} 
                imageCount={slides.length} 
            />

        </HeaderWrapper>
    )
}


export default HomeHeader