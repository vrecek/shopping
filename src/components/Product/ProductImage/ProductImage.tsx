import Image from '@/components/Common/Image'
import { ProductImageType } from '@/interfaces/ProductPageInterfaces'
import styles from '@/styles/Product/Product.module.scss'
import AdditionalImages from './AdditionalImages'


const ProductImage = ({productImages, productName}: ProductImageType) => {
    return (
        <section className={ styles['product-image'] }>

            <AdditionalImages 
                productName={productName} 
                productImages={productImages} 
                activeClassname={ styles['image-active'] }
            />

            <Image 
                cname={ styles['main-image'] }
                source={productImages[0]}
                altTxt={productName} 
            />

        </section>
    )
}


export default ProductImage