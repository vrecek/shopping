import { LinkOptions } from '@/interfaces/CommonInterfaces'
import React from 'react'
import { FaTshirt } from 'react-icons/fa'
import styles from '../../../../../styles/Layout/LayoutNavigation.module.scss'
import MenuCategory from './MenuCategory'


const Menu = () => {
    const categories: LinkOptions[] = [
        { text: 'Category', url: '/', icon: <FaTshirt /> },
        { text: 'Category', url: '/', icon: <FaTshirt /> },
        { text: 'Category', url: '/', icon: <FaTshirt /> },
        { text: 'Category', url: '/', icon: <FaTshirt /> },
        { text: 'Category', url: '/', icon: <FaTshirt /> },
        { text: 'Category', url: '/', icon: <FaTshirt /> }
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