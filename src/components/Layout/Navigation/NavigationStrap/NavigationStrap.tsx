import { ModuleClassname } from '@/interfaces/CommonInterfaces'
import React from 'react'
import styles from '../../../../styles/Layout/LayoutNavigation.module.scss'


const NavigationStrap = ({moduleClassname}: ModuleClassname) => {
    return (
        <section className={moduleClassname}>

            <p>vrecek-ffci@outlook.com</p>
            <p>Tel. 918-273-444</p>

        </section>
    )
}


export default NavigationStrap