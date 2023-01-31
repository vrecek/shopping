import Button from '@/components/Common/Button'
import Image from '@/components/Common/Image'
import ProductAvailable from '@/components/Common/ProductAvailable'
import ProductRating from '@/components/Common/ProductRating'
import styles from '@/styles/Home/HomeRandom.module.scss'


const RightProduct = () => {
    return (
        <article className={ styles['right-product'] }>

            <Image source='http://localhost:3000/_next/static/media/product.f7b1d904.png' />

            <p className={ styles['name'] }>Lorem ipsum product</p>

            <ProductRating 
                activeClass={ styles['active'] } 
                containerClass={ styles['product-rating'] }
                rate={3}
                totalRates={162}
            />

            <p className={ styles['desc'] }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum nemo dolorem ipsa delectus, libero illum molestiae eos tempore repudiandae a qui eius odit</p>

            <ProductAvailable 
                productsNum={32} 
            />

            <p className={ styles['price'] }>999</p>

            <Button text='View' />

        </article>
    )
}

export default RightProduct