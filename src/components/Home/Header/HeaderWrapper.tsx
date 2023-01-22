import { Aliases } from '@/util/Client'
import React from 'react'
import styles from '../../../styles/Home/Header.module.scss'


const HeaderWrapper = ({children}: Aliases.Text<JSX.Element[]>) => {
    return (
        <header className={ styles['home-header'] }>

            <section className={ `${styles['home-header-container']} home-header-container` }>

                {children}

            </section>

        </header>
    )
}


export default HeaderWrapper