import { LinkOptions } from '@/interfaces/CommonInterfaces'
import React from 'react'
import styles from '../../../styles/Layout/LayoutFooter.module.scss'
import Logo from '../Navigation/NavigationCenter/Logo'
import LinksList from './LinksList'


const LayoutFooter = () => {
    const list1: LinkOptions[] = [
        {text: 'Navigation', url: '/', cname: styles['header']},
        {text: 'Lorem', url: '/'},
        {text: 'Ipsum', url: '/'},
        {text: 'Conqestur', url: '/'},
        {text: 'Dolore', url: '/'}
    ]

    const list2: LinkOptions[] = [
        {text: 'Sollicitudin', url: '/', cname: styles['header']},
        {text: 'Accumsan', url: '/'},
        {text: 'Ultrices', url: '/'},
        {text: 'Vivamus', url: '/'},
        {text: 'Praesent', url: '/'}
    ]

    const list3: LinkOptions[] = [
        {text: 'Miscellaneous', url: '/', cname: styles['header']},
        {text: 'Fermentum', url: '/'},
        {text: 'Vestibulum', url: '/'},
        {text: 'Inceptos', url: '/'},
        {text: 'Euismod', url: '/'}
    ]


    return (
        <footer className={ styles['layout-footer'] }>

            <section>

                <Logo moduleClassname={ styles['logo'] } />

                <LinksList list={list1} />
                <LinksList list={list2} />
                <LinksList list={list3} />

            </section>

            <p>All rights reserved &copy;</p>

        </footer>
    )
}


export default LayoutFooter