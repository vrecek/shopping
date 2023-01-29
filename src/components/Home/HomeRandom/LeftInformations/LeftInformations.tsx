import React from 'react'
import styles from '@/styles/Home/HomeRandom.module.scss'
import InformationElement from './InformationElement'
import { LeftInformationsType } from '@/interfaces/HomeInterfaces'
import Icon from '@/components/Common/Icon'
import {FiArrowRight} from 'react-icons/fi'
import Link from 'next/link'


const LeftInformations = ({informations, category}: LeftInformationsType) => {
    return (
        <article className={ styles['left-informations'] }>

            <p className={ styles['header-category'] }>{category}</p>

            <ul>

                {
                    informations.map((x, i) => (
                        <InformationElement
                            key={i}
                            header={x.header}
                            icon={x.icon}
                            value={x.value}
                        />
                    ))
                }

            </ul>

            <Link href='/' className={ styles['more'] }>
                See more 
                <Icon><FiArrowRight /></Icon>
            </Link>

        </article>
    )
}


export default LeftInformations