import Icon from "@/components/Common/Icon"
import Link from "next/link"
import {BsArrowRightShort} from 'react-icons/bs'
import styles from '../../../styles/Home/HomeProducts.module.scss'


const DescriptionBar = () => {
    return (
        <section className={ styles['section-description'] }>

            <p>Lorem ipsum</p>

            <Link href='/'>

                More T-Shirts 
                <Icon><BsArrowRightShort /></Icon>

            </Link>

        </section>
    )
}

export default DescriptionBar