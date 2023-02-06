import { LinkOptions } from '@/interfaces/CommonInterfaces'
import Link from 'next/link'
import React from 'react'
import styles from '../../../../styles/Layout/LayoutNavigation.module.scss'


const NavigationLinks = () => {
    const list: LinkOptions[] = [
        {text: 'Discounts', url: '/'},
        {text: 'Latest', url: '/'},
        {text: 'Popular', url: '/'},
        {text: 'Contact', url: '/contact'}
    ]


    return (
        <ul className={ styles['nav-links'] }>

            {
                list.map((x, i) => (
                    <li key={i}>
                        
                        <Link href={x.url}>
                            {x.text}
                        </Link>

                    </li>
                ))
            }

        </ul>
    )
}


export default NavigationLinks