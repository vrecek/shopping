import { ProductRatingType } from '@/interfaces/CommonInterfaces'
import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'


const ProductRating = ({rate, totalRates, activeClass, containerClass}: ProductRatingType) => {
    return (
        <section className={containerClass}>

            {
                [...Array(5)].map((x, i) => (

                    <span 
                    className={ i < rate ? activeClass : ''} 
                    key={i}>
                        <AiOutlineStar />
                    </span>

                ))
            }

            <p>({totalRates})</p>

        </section>
    )
}


export default ProductRating