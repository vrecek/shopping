import React from 'react'
import styles from '@/styles/Search/Search.module.scss'
import Image from '../Common/Image'
import emptyImage from '@/images/search_empty.png'
import QueryInfo from './QueryInfo'


const ProductsEmpty = ({query}: {query: string}) => {
    return (
        <main className={ `${styles['search-page']} ${styles['products-empty']}` }>

            <QueryInfo 
                isFound={false}
                query={query}
                cname={ styles['query-info'] }
            />

            <Image source={emptyImage.src} altTxt='No products found' />

        </main>
    )
}


export default ProductsEmpty