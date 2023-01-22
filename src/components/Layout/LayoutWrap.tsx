import { Aliases } from '@/util/Client'
import React from 'react'
import HeadData from '../HeadData'
import LayoutFooter from './Footer/LayoutFooter'
import LayoutNavigation from './Navigation/LayoutNavigation'


const LayoutWrap = ({children}: Aliases.Text<JSX.Element>) => {
    return (
        <HeadData>

            <LayoutNavigation />

            {children}

            <LayoutFooter />

        </HeadData>
    )
}


export default LayoutWrap