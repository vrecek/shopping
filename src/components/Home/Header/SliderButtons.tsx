import { SliderButtonsType } from '@/interfaces/HomeInterfaces'
import { intervalSliderFunc, INTERVAL_TIME, setSlide } from '@/util/SliderFunctions'
import React from 'react'
import styles from '../../../styles/Home/Header.module.scss'


const SliderButtons = ({imageCount, sliderInterval, setSliderInterval}: SliderButtonsType) => {
    const changeSlide = (e: React.MouseEvent, nr: number): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement,
              slider: HTMLElement = t.parentElement!.parentElement!.children[0] as HTMLElement


        slider.style.transition = '.5s'
        slider.style.translate = `-${(nr + 1) * 100}% 0`

        for (const btn of [...t.parentElement!.children])
            btn.className = ''

        t.className = styles['slider-button-active']

        setSlide(slider, nr + 2)

        clearInterval(sliderInterval!)
        setSliderInterval(
            setInterval(() => intervalSliderFunc(slider), INTERVAL_TIME)
        )
    }


    return (
        <section className={ styles['slider-buttons'] }>

            {
                [...Array(imageCount)].map((_, i) => (
                    <span
                        onClick={(e) => changeSlide(e, i)}
                        key={i} 
                        className={i === 0 ? styles['slider-button-active'] : ''}>
                    </span>
                ))
            }


        </section>
    )
}


export default SliderButtons