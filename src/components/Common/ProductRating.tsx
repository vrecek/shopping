import { ProductRatingType } from '@/interfaces/CommonInterfaces'
import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'


const ProductRating = ({rate, totalRates, activeClass}: ProductRatingType) => {
    return (
        <section>

            {
                [...Array(5)].map((x, i) => (

                    <span 
                    className={ i < rate ? activeClass : ''} 
                    key={i}>
                        <AiOutlineStar />
                    </span>

                ))
            }

            ({totalRates})

        </section>
    )
}


export default ProductRating