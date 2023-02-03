import Icon from '@/components/Common/Icon'
import { NextRouter, useRouter } from 'next/router'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import styles from '../../../../styles/Layout/LayoutNavigation.module.scss'


const Searchbar = () => {
    const router: NextRouter = useRouter()

    const redirectToSearch = (e: React.KeyboardEvent): void => {
        const t: HTMLInputElement = e.currentTarget as HTMLInputElement
        const {value} = t

        if (e.key === 'Enter' && value.length > 2) {
            t.value = ''
            
            router.push(`/search/bar/${value}`)
        }
    }


    return (
        <section className={ styles['searchbar'] }>

            <input onKeyUp={redirectToSearch} type="text" spellCheck='false' />
            <Icon><BsSearch /></Icon>

        </section>
    )
}


export default Searchbar