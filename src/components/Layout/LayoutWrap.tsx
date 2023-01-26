import { Aliases } from '@/util/Client'
import React from 'react'
import HeadData from '../HeadData'
import LayoutFooter from './Footer/LayoutFooter'
import LayoutArrow from './LayoutArrow'
import LayoutNavigation from './Navigation/LayoutNavigation'


const LayoutWrap = ({children}: Aliases.Text<JSX.Element>) => {
    React.useEffect(() => {
        const bodyElem: Element[] = [...document.body.children]

        const nav: HTMLElement = bodyElem[0].children[0].children[1] as HTMLElement,
              arrow: HTMLElement = bodyElem[0].children[bodyElem.length - 1] as HTMLElement


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
        <HeadData>

            <LayoutNavigation />

            {children}

            <LayoutFooter />

            <LayoutArrow />

        </HeadData>
    )
}


export default LayoutWrap