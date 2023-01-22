import Icon from '@/components/Common/Icon'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import styles from '../../../../styles/Layout/LayoutNavigation.module.scss'


const Searchbar = () => {
    return (
        <section className={ styles['searchbar'] }>

            <input type="text" spellCheck='false' />
            <Icon><BsSearch /></Icon>

        </section>
    )
}


export default Searchbar