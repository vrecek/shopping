import Image from '@/components/Common/Image'
import ProductRating from '@/components/Common/ProductRating'
import React from 'react'
import styles from '@/styles/Home/HomeProducts.module.scss'
import { ProductItemType } from '@/interfaces/HomeInterfaces'


const ProductItem = ({id, image, name, price, rate, totalRates}: ProductItemType) => {
    const {name_c, active, price_c, image_c} = styles


    return (
        <article>

            <Image cname={image_c} source={image} altTxt='Product' />

            <p className={name_c}>{name}</p>

            <div>
                <ProductRating totalRates={totalRates} activeClass={active} rate={rate} />

                <p className={price_c}>{price}</p>
            </div>

        </article>
    )
}


export default ProductItem