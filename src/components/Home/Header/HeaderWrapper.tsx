import { HeaderWrapperType } from '@/interfaces/HomeInterfaces'
import React from 'react'


const HeaderWrapper = ({children, headerCname, wrapCname}: HeaderWrapperType) => {
    return (
        <header className={headerCname}>

            <section className={wrapCname}>

                {children}

            </section>

        </header>
    )
}


export default HeaderWrapper