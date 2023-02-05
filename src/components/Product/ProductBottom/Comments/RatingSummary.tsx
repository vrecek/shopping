import Icon from '@/components/Common/Icon'
import styles from '@/styles/Product/ProductBottom.module.scss'
import {AiOutlineStar} from 'react-icons/ai'


const RatingSummary = () => {
    return (
        <ul className={ styles['rating-summary'] }>

            {
                [...Array(5)].map((x, i) => (
                    <li key={i}>

                        <div className={ styles['rating-first'] }>
                            <Icon><AiOutlineStar /></Icon>
                            <p>5</p>
                        </div>

                        <div className={ styles['rating-bar'] }>
                            <div></div>
                        </div>

                        <p className={ styles['total-votes'] }>999</p>

                    </li>
                ))
            }


        </ul>
    )
}


export default RatingSummary