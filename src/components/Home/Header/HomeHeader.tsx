import { SlideType } from '@/interfaces/HomeInterfaces'
import styles from '../../../styles/Home/Header.module.scss'
import HeaderWrapper from './HeaderWrapper'
import MovingContainer from './MovingContainer'
import SliderButtons from './SliderButtons'
import image from '../../../images/slide1.jpg'


const HomeHeader = () => {
    const {'home-header': hh, 'home-header-container': hhc, 'moving-container': mc, 'slider-buttons': sb} = styles
    const slides: SlideType[] = [
        {image: image.src, buttonText: '', buttonUrl: '/', header: 'Header', para: 'Para'}
    ]


    return (
        <HeaderWrapper headerCname={hh} wrapCname={hhc}>

            <MovingContainer moduleClassname={mc} slides={slides} />

            <SliderButtons moduleClassname={sb} imageCount={3} />

        </HeaderWrapper>
    )
}


export default HomeHeader