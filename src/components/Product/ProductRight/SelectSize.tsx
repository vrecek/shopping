import { SelectSizeType } from '@/interfaces/ProductPageInterfaces'
import Client, { DD } from '@/util/Client'
import React from 'react'
import SizeToggler from './SizeToggler'

const SelectSize = ({currentSize, moduleClassname, setSize, sizes}: SelectSizeType) => {
    const [dd] = React.useState<DD.DropDown>(new Client.DropDown(500))

    const changeCurrentSize = (e: React.MouseEvent, size: string): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement

        dd.switchActive()
        dd.rotateArrow(t.parentElement!.parentElement!.children[0].children[1] as HTMLElement)
        dd.shrinkMenu()

        setSize(size)
    }


    return (
        <section className={moduleClassname}>

            <SizeToggler 
                dropdown={dd} 
                currentSize={currentSize}
            />

            <ul>

                {
                    sizes.map(size => (
                        <li onClick={(e) => changeCurrentSize(e, size)}>
                            {size}
                        </li>
                    ))
                }

            </ul>

        </section>
    )
}

export default SelectSize