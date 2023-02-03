import { LayoutWrapType } from '@/interfaces/CommonInterfaces'
import React from 'react'
import HeadData from '../HeadData'
import LayoutFooter from './Footer/LayoutFooter'
import LayoutArrow from './LayoutArrow'
import LayoutNavigation from './Navigation/LayoutNavigation'


const LayoutWrap = ({children, title, onlyCenter}: LayoutWrapType) => {
    React.useEffect(() => {
        const nav: HTMLElement = document.querySelector('#layout-navigation-center') as HTMLElement,
              arrow: HTMLElement = document.querySelector('.layout-arrow') as HTMLElement


        if (!nav || !arrow) return


        let scrolled: boolean = false
        window.addEventListener('scroll', () => {
            if (!scrolled && window.scrollY > 600) {
                scrolled = true

                arrow.style.opacity = '1'
                arrow.style.pointerEvents = 'all'

                nav.style.position = 'fixed'
            }
            else if (scrolled && window.scrollY <= 600) {
                scrolled = false

                arrow.style.opacity = '0'
                arrow.style.pointerEvents = 'none'

                nav.style.position = 'static'
            }
        })

    }, [])


    return (
        <HeadData title={title}>

            <>
                <LayoutNavigation onlyCenter={onlyCenter} />

                {children}

                <LayoutFooter />

                <LayoutArrow />
            </>

        </HeadData>
    )
}


export default LayoutWrap