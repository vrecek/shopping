import React from 'react'
import NavigationBottom from './NavigationBottom/NavigationBottom'
import NavigationCenter from './NavigationCenter/NavigationCenter'
import NavigationStrap from './NavigationStrap/NavigationStrap'
import styles from '../../../styles/Layout/LayoutNavigation.module.scss'
import { NavigationWrapType } from '@/interfaces/NavigationInterfaces'


const LayoutNavigation = ({onlyCenter}: NavigationWrapType) => {
    const { 'navigation-strap': ns, 'navigation-center': nc, 'navigation-bottom': nb, 'layout-navigation': ln } = styles

    const navigationParts: JSX.Element[] = [
        <NavigationStrap key={1} moduleClassname={ns} />,
        <NavigationCenter key={2} moduleClassname={nc} />,
        <NavigationBottom key={3} moduleClassname={nb} />
    ]

    if (onlyCenter) {
        navigationParts.pop()
        navigationParts.shift()
    }


    return (
        <nav className={ln}>

            {
                [...navigationParts]
            }

        </nav>
    )
}


export default LayoutNavigation