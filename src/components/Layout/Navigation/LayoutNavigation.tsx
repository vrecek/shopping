import React from 'react'
import NavigationBottom from './NavigationBottom/NavigationBottom'
import NavigationCenter from './NavigationCenter/NavigationCenter'
import NavigationStrap from './NavigationStrap/NavigationStrap'
import styles from '../../../styles/Layout/LayoutNavigation.module.scss'


const LayoutNavigation = () => {
    const { 'navigation-strap': ns, 'navigation-center': nc, 'navigation-bottom': nb } = styles


    return (
        <nav className={ styles['layout-navigation'] }>

            <NavigationStrap moduleClassname={ns} />
            <NavigationCenter moduleClassname={nc} />
            <NavigationBottom moduleClassname={nb} />

        </nav>
    )
}


export default LayoutNavigation