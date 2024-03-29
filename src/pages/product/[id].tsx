import LayoutWrap from '@/components/Layout/LayoutWrap';
import Description from '@/components/Product/ProductBottom/Description/Description';
import DisplaySelect from '@/components/Product/ProductBottom/DisplaySelect';
import ProductImage from '@/components/Product/ProductImage/ProductImage';
import ProductRight from '@/components/Product/ProductRight/ProductRight';
import SimilarProducts from '@/components/Product/SimilarProducts';
import { PageParams } from '@/interfaces/CommonInterfaces';
import { ProductType } from '@/interfaces/ProductType';
import styles from '@/styles/Product/Product.module.scss'
import React from 'react';


const ProductPage = ({searchedProduct}: {searchedProduct: ProductType}) => {
    const [product, setProducts] = React.useState<ProductType>(searchedProduct)
    const [displaySection, setDisplay] = React.useState<JSX.Element>(<Description />)

    const {additionalImages, mainImage, name, sizes} = product


    return (
        <LayoutWrap onlyCenter={true} title='Product name'>

            <main className={ styles['product-page'] }>

                <section className={ styles['main-wrap'] }>

                    <ProductImage 
                        productImages={ [mainImage, ...additionalImages] }
                        productName={name}
                    />

                    <ProductRight 
                        sizes={sizes}
                    />
                    
                </section>

                <DisplaySelect 
                    setDisplay={setDisplay}
                />

                {displaySection}
                
                <SimilarProducts header="You may like it" />
                <SimilarProducts header="Other from category" />

            </main>

        </LayoutWrap>
    )
}


const getServerSideProps = async ({ params: { id } }: PageParams<{id: string}>) => {
    const searchedProduct: ProductType = {
        name: 'Lorem ipsym dolor sitamet',

        mainImage: 'http://localhost:3000/_next/static/media/product.f7b1d904.png',
        additionalImages: [
            'http://localhost:3000/_next/static/media/product.f7b1d904.png',
            'http://localhost:3000/_next/static/media/product.f7b1d904.png'
        ],

        sizes: ['S', 'L', 'XL', 'XXL']
    }


    return {
        props: {
            searchedProduct
        }
    }
}


export {getServerSideProps}
export default ProductPage