import { ModuleClassname } from '@/interfaces/CommonInterfaces'
import React from 'react'
import Logo from './Logo'
import NavigationIcons from './NavigationIcons'
import Searchbar from './Searchbar'


const NavigationCenter = ({moduleClassname}: ModuleClassname) => {
    return (
        <section className={moduleClassname}>

            <Logo />
            <Searchbar />
            <NavigationIcons />

        </section>
    )
}


export default NavigationCenter