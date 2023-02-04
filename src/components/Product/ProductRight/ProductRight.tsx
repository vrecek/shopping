import Button from '@/components/Common/Button'
import ProductAvailable from '@/components/Common/ProductAvailable'
import styles from '@/styles/Product/Product.module.scss'
import ProductRating from '@/components/Common/ProductRating'
import { BsBasket } from 'react-icons/bs'
import SelectSize from './SelectSize'
import MiscInformations from './MiscInformations'
import React from 'react'
import { OrderSize, ProductRightType } from '@/interfaces/ProductPageInterfaces'


const ProductRight = ({sizes}: ProductRightType) => {
    const [orderedSize, setSize] = React.useState<OrderSize>(null)


    return (
        <section className={ styles['product-right'] }>

            <h2>Company</h2>
            <h1>Lorem ipsum dolor sitamet</h1>
            <h3>999</h3>

            <ProductRating 
                activeClass={ styles['rating-active'] } 
                rate={4} 
                totalRates={273} 
                containerClass={ styles['rating'] } 
            />

            <p className={ styles['desc'] }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat recusandae officiis vitae quis veritatis quos, itaque nam odio.</p>

            <ProductAvailable 
                productsNum={170} 
                containerClass={ styles['available'] }
            />

            <MiscInformations moduleClassname={ styles['misc-informations'] } />

            <SelectSize 
                currentSize={orderedSize}
                sizes={sizes}
                moduleClassname={ styles['select-size'] } 
                setSize={setSize}
            />

            <Button additional={<BsBasket />}>
                Add to cart
            </Button>

        </section>
    )
}


export default ProductRight