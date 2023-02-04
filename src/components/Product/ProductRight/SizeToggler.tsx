import Icon from '@/components/Common/Icon'
import { SizeTogglerType } from '@/interfaces/ProductPageInterfaces'
import React from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'


const SizeToggler = ({dropdown, currentSize}: SizeTogglerType) => {
    const toggleSizes = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement,
              list: HTMLElement = t.parentElement!.children[1] as HTMLElement,
              arrow: HTMLElement = t.children[1] as HTMLElement


        dropdown.switchActive()
        dropdown.getActive
            ? dropdown.expandMenu(list)
            : dropdown.shrinkMenu()

        dropdown.rotateArrow(arrow)
    }

    
    return (
        <div onClick={toggleSizes}>

            <p>{currentSize ?? 'Select size'}</p>
            <Icon><MdKeyboardArrowDown /></Icon>

        </div>
    )
}


export default SizeToggler