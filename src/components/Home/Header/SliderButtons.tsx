import { SliderButtonsType } from '@/interfaces/HomeInterfaces'
import React from 'react'
import styles from '../../../styles/Home/Header.module.scss'


const SliderButtons = ({imageCount, moduleClassname}: SliderButtonsType) => {
    return (
        <section className={moduleClassname}>

            <span className={ styles['slider-button-active'] }></span>
            <span></span>
            <span></span>

        </section>
    )
}


export default SliderButtons