import React from 'react'
import styles from '@/styles/Home/HomeProductsTiles.module.scss'
import RowContainer from './RowContainer'
import image from '@/images/product.png'
import image2 from '@/images/product2.png'
import image3 from '@/images/product3.png'
import image4 from '@/images/product4.png'
import { RowProducts, TileProductType } from '@/interfaces/HomeInterfaces'


const HomeProductsTiles = () => {
    const prods: TileProductType[] = [
        {image: image.src, name: 'Sneak'},
        {image: image2.src, name: 'T-Shirt'},
        {image: image3.src, name: 'Hoodie'},
        {image: image4.src, name: 'Sneak'},
        {image: image.src, name: 'Sneak'},
        {image: image.src, name: 'Pants'},
    ]


    return (
        <section className={ styles['home-products-tiles'] }>

            <RowContainer 
                cname={ styles['row'] }
                products={prods.slice(0,3) as RowProducts}
            />

            <RowContainer 
                products={prods.slice(3, 6) as RowProducts}
                cname={ `${styles['row']} ${styles['reversed']}` }
            />

        </section>
    )
}


export default HomeProductsTiles