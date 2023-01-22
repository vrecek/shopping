import { ModuleClassname } from '@/interfaces/CommonInterfaces'
import React from 'react'
import NavigationMenu from './MenuSection/NavigationMenu'
import NavigationLinks from './NavigationLinks'


const NavigationBottom = ({moduleClassname}: ModuleClassname) => {
    return (
        <section className={moduleClassname}>

            <NavigationMenu />
            <NavigationLinks />

        </section>
    )
}


export default NavigationBottom