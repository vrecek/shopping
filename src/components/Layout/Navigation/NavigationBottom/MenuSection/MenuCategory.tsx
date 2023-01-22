import Icon from '@/components/Common/Icon'
import { LinkOptions } from '@/interfaces/CommonInterfaces'
import Link from 'next/link'
import React from 'react'

const MenuCategory = ({text, url, icon}: LinkOptions) => {
    return (
        <li>

            <Link href={url}>

                <Icon>{icon!}</Icon>
                {text}
                
            </Link>

        </li>
    )
}

export default MenuCategory