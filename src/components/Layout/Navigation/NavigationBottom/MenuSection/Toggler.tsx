import Icon from '@/components/Common/Icon'
import Client, { DD } from '@/util/Client'
import React from 'react'
import {BiMenu} from 'react-icons/bi'
import styles from '../../../../../styles/Layout/LayoutNavigation.module.scss'


const Toggler = () => {
    const [dd] = React.useState<DD.DropDown>(new Client.DropDown(500))

    const toggleMenu = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement,
              icon: HTMLElement = t.children[0] as HTMLElement,
              menu: HTMLElement = t.parentElement!.children[1] as HTMLElement


        if (dd.getActive) {

            dd.expandMenu(menu)
            icon.style.scale = '1'

        } else {

            dd.shrinkMenu(menu)
            icon.style.scale = '.8'

        }

        dd.switchActive()
    }


    return (
        <p onClick={toggleMenu} className={ styles['toggler'] }>
            Categories
            <Icon><BiMenu /></Icon>
        </p>
    )
}


export default Toggler