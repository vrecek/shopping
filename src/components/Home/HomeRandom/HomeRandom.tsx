import styles from '@/styles/Home/HomeRandom.module.scss'
import Image from '@/components/Common/Image'
import img from '@/images/Home_random/r_tshirt.jpg'
import LeftInformations from './LeftInformations/LeftInformations'
import { RandomLeftElementType } from '@/interfaces/HomeInterfaces'
import { FaSitemap } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import { BsTruck } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import RightProduct from './RightProduct/RightProduct'


const HomeRandom = () => {
    const categoryInformations: RandomLeftElementType[] = [
        {
            icon: <FaSitemap />,
            header: 'Total products',
            value: 931
        },

        {
            icon: <AiOutlineStar />,
            header: 'Overall rating',
            value: '8/10'
        },

        {
            icon: <BsTruck />,
            header: 'Total brands',
            value: 52
        },

        {
            icon: <BiTimeFive />,
            header: 'Last added',
            value: '2 Days ago'
        }
    ]


    return (
        <section className={ styles['home-random'] }>

            <Image cname={ styles['bg-image'] } source={ img.src } altTxt='Category' />

            <section className={ styles['container-wrap'] }>

                <LeftInformations 
                    category='T-shirts' 
                    informations={categoryInformations} 
                /> 

                <RightProduct />

            </section>

        </section>
    )
}


export default HomeRandom