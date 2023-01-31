import { ModuleClassname } from '@/interfaces/CommonInterfaces'
import React from 'react'
import Logo from './Logo'
import NavigationIcons from './NavigationIcons'
import Searchbar from './Searchbar'
import styles from '@/styles/Layout/LayoutNavigation.module.scss'


const NavigationCenter = ({moduleClassname}: ModuleClassname) => {
    return (
        <section className={moduleClassname}>

            <Logo moduleClassname={ styles['logo'] } />
            <Searchbar />
            <NavigationIcons />

        </section>
    )
}


export default NavigationCenter