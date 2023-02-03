import { ProductsComponentType } from '@/interfaces/BasketInterfaces'
import styles from '@/styles/Basket/Basket.module.scss'
import React from 'react'
import BasketProduct from './BasketProduct'


const Products = ({products, setProducts, totalProducts}: ProductsComponentType) => {
    return (
        <section className={ styles['basket-products'] }>

            <h1>Products</h1>

            {
                products.map((x, i) => (
                    <BasketProduct
                        key={i}
                        totalProducts={totalProducts}
                        id={x.id}
                        setProducts={setProducts}
                        quantity={x.quantity}
                    />
                ))
            }

        </section>
    )
}


export default Products