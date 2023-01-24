import React from 'react'
import styles from '@/styles/Home/HomeInformations.module.scss' 
import InformationItem from './InformationItem'
import { InformationItemType } from '@/interfaces/HomeInterfaces'
import { BiSupport } from 'react-icons/bi'


const HomeInformations = () => {
    const infos: InformationItemType[] = [
        {
            icon: <BiSupport />,
            header: '24/7 Support',
            desc: 'Lorem ipsum dolor sitamet concesteur'
        },

        {
            icon: <BiSupport />,
            header: '24/7 Support',
            desc: 'Lorem ipsum dolor sitamet concesteur',
            button: {
                str: 'Contact us',
                url: '/'
            }
        },

        {
            icon: <BiSupport />,
            header: '24/7 Support',
            desc: 'Lorem ipsum dolor sitamet concesteur'
        },

        {
            icon: <BiSupport />,
            header: '24/7 Support',
            desc: 'Lorem ipsum dolor sitamet concesteur',
            button: {
                str: 'Contact us',
                url: '/'
            }
        }
    ]


    return (
        <section className={ styles['home-informations'] }>

            {
                infos.map((x, i) => (
                    <InformationItem
                        key={i}
                        desc={x.desc}
                        header={x.header}
                        icon={x.icon}
                        button={x.button}
                    />
                ))
            }

        </section>
    )
}


export default HomeInformations