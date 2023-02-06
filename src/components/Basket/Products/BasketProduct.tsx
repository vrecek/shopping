import Image from '@/components/Common/Image'
import React from 'react'
import ProductQuantity from './ProductQuantity'
import styles from '@/styles/Basket/Basket.module.scss'
import { BasketItemData } from '@/interfaces/BasketInterfaces'
import ProductPrice from '@/components/Common/ProductPrice'


const BasketProduct = ({quantity, setProducts, id, totalProducts}: BasketItemData) => {
    return (
        <article>

            <Image source='http://localhost:3000/_next/static/media/product.f7b1d904.png' altTxt='Product' />

            <p className={ styles['name'] }>Lorem ipsum product name</p>

            <ProductQuantity 
                quantity={quantity} 
                id={id}
                setProducts={setProducts}
                totalProducts={totalProducts}
            />

            <ProductPrice
                discountPercent={3}
                price={102}
                cname='basket-item-price'
            />

        </article>
    )
}


export default BasketProduct