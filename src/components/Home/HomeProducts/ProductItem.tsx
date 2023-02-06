import Image from '@/components/Common/Image'
import ProductRating from '@/components/Common/ProductRating'
import React from 'react'
import { ProductItemType } from '@/interfaces/HomeInterfaces'
import { useRouter } from 'next/router'
import ProductPrice from '@/components/Common/ProductPrice'


const ProductItem = ({id, image, name, price, rate, totalRates}: ProductItemType) => {
    const redirect = useRouter().push


    return (
        <article onClick={() => redirect(`/product/${id}`)} className='basic-product'>

            <Image source={image} altTxt={name} />

            <p className='name'>{name}</p>

            <div>

                <ProductRating totalRates={totalRates} activeClass='active' rate={rate} />

                <ProductPrice
                    discountPercent={30}
                    price={102}
                />

            </div>

        </article>
    )
}


export default ProductItem