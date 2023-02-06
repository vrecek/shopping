import { LinkOptions } from '@/interfaces/CommonInterfaces'
import React from 'react'
import { FaTshirt } from 'react-icons/fa'
import styles from '../../../../../styles/Layout/LayoutNavigation.module.scss'
import MenuCategory from './MenuCategory'
import {GiConverseShoe, GiArmoredPants, GiUnderwearShorts, GiBilledCap, GiEmeraldNecklace} from 'react-icons/gi'


const Menu = () => {
    const categories: LinkOptions[] = [
        { text: 'T-shirts', url: '/', icon: <FaTshirt /> },
        { text: 'Footwear', url: '/', icon: <GiConverseShoe /> },
        { text: 'Pants', url: '/', icon: <GiArmoredPants /> },
        { text: 'Underwear', url: '/', icon: <GiUnderwearShorts /> },
        { text: 'Hats', url: '/', icon: <GiBilledCap /> },
        { text: 'Accessories', url: '/', icon: <GiEmeraldNecklace /> }
    ]


    return (
        <aside className={ styles['menu'] }>

            <ul>

                {
                    categories.map((x, i) => (
                        <MenuCategory 
                            key={i}
                            text={x.text}
                            url={x.url}
                            icon={x.icon}
                        />
                    ))
                }

            </ul>

        </aside>
    )
}


export default Menu