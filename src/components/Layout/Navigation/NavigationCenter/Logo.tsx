import Link from 'next/link'
import React from 'react'
import styles from '../../../../styles/Layout/LayoutNavigation.module.scss'


const Logo = () => {
    return (
        <Link href='/' className={ styles['logo'] }>
            Sho<span>pp</span>ing
        </Link>
    )
}


export default Logo