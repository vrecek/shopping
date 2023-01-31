import React from 'react'
import NavigationBottom from './NavigationBottom/NavigationBottom'
import NavigationCenter from './NavigationCenter/NavigationCenter'
import NavigationStrap from './NavigationStrap/NavigationStrap'
import styles from '../../../styles/Layout/LayoutNavigation.module.scss'


const LayoutNavigation = () => {
    const { 'navigation-strap': ns, 'navigation-center': nc, 'navigation-bottom': nb, 'layout-navigation': ln } = styles


    return (
        <nav id='layout-navigation' className={ln}>

            <NavigationStrap moduleClassname={ns} />
            <NavigationCenter moduleClassname={nc} />
            <NavigationBottom moduleClassname={nb} />

        </nav>
    )
}


export default LayoutNavigation