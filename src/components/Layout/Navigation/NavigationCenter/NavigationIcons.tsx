import React from 'react'
import { BsBasket } from 'react-icons/bs'
import { LinkOptions } from '../../../../interfaces/CommonInterfaces'
import Icon from '../../../Common/Icon'
import {SlUser} from 'react-icons/sl'
import styles from '../../../../styles/Layout/LayoutNavigation.module.scss'
import Link from 'next/link'
import { AiOutlineLogin } from 'react-icons/ai'


const NavigationIcons = () => {
    const links: LinkOptions[] = [
        {text: 'Basket', url: '/basket', icon: <BsBasket />},
        {text: 'Sign in', url: '/signin', icon: <AiOutlineLogin />},
        // {text: 'Profile', url: '/', icon: <SlUser />}
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