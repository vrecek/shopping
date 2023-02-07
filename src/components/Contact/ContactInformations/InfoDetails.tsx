import Icon from '@/components/Common/Icon'
import React from 'react'
import { BiSupport } from 'react-icons/bi'
import styles from '@/styles/Contact/Contact.module.scss'
import { InfoDetailType } from '@/interfaces/ContactInterfaces'


const InfoDetails = () => {
    const infos: InfoDetailType[] = [
        {
            icon: <BiSupport />,
            header: 'Lorem ipsum',
            text: 'Dolor sit amet'
        },

        {
            icon: <BiSupport />,
            header: 'Lorem ipsum',
            text: 'Dolor sit amet'
        },

        {
            icon: <BiSupport />,
            header: 'Lorem ipsum',
            text: 'Dolor sit amet'
        }
    ]


    return (
        <ul>

            {
                infos.map((x, i) => (
                    <li key={i}>

                        <Icon>{x.icon}</Icon>

                        <div>

                            <p className={ styles['info-header'] }>{x.header}</p>
                            <p className={ styles['info-text'] }>{x.text}</p>

                        </div>

                    </li>
                ))
            }

        </ul>
    )
}

export default InfoDetails