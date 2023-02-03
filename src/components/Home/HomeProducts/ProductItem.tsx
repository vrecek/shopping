import Image from '@/components/Common/Image'
import ProductRating from '@/components/Common/ProductRating'
import React from 'react'
import { ProductItemType } from '@/interfaces/HomeInterfaces'


const ProductItem = ({id, image, name, price, rate, totalRates}: ProductItemType) => {
    return (
        <article className='basic-product'>

            <Image source={image} altTxt={name} />

            <p className='name'>{name}</p>

            <div>
                <ProductRating totalRates={totalRates} activeClass='active' rate={rate} />

                <p className='price'>{price}</p>
            </div>

        </article>
    )
}


export default ProductItem