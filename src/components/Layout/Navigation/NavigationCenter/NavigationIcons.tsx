import React from 'react'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { LinkOptions } from '../../../../interfaces/CommonInterfaces'
import Icon from '../../../Common/Icon'
import {FaUserAlt} from 'react-icons/fa'
import styles from '../../../../styles/Layout/LayoutNavigation.module.scss'
import Link from 'next/link'


const NavigationIcons = () => {
    const links: LinkOptions[] = [
        {text: 'Basket', url: '/', icon: <BsFillBasket2Fill />},
        {text: 'Profile', url: '/', icon: <FaUserAlt />}
    ]


    return (
        <ul className={ styles['links'] }>

            {
                links.map((x, i) => (
                    <li data-type={x.text} key={i}>

                        <Link href={x.url}>

                            <Icon>{x.icon!}</Icon>
                            {
                                x.text === 'Basket' 
                                    && <p>5</p>
                            }

                        </Link>

                    </li>
                ))
            }

        </ul>
    )
}


export default NavigationIcons