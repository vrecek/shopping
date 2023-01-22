import React from 'react'
import Menu from './Menu'
import Toggler from './Toggler'
import styles from '../../../../../styles/Layout/LayoutNavigation.module.scss'


const NavigationMenu = () => {
    return (
        <section className={ styles['navigation-menu'] }>

            <Toggler />

            <Menu />

        </section>
    )
}


export default NavigationMenu