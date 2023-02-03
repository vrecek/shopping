import ProductItem from "../Home/HomeProducts/ProductItem"
import Filters from "./Filters/Filters"
import styles from '@/styles/Search/Search.module.scss'
import { SearchProps } from "@/interfaces/SearchInterfaces"
import QueryInfo from "./QueryInfo"


const ProductsFound = ({products, query}: SearchProps) => {
    return (
        <main className={ `${styles['search-page']} ${styles['products-found']}` } >

            <Filters />

            <section className={ styles['products-wrap'] }>

                <QueryInfo 
                    isFound={true}
                    query={query}
                    cname={ styles['query-info'] }
                />

                <section className={ styles['product-container'] }>
                    {
                        products.map(x => (
                            <ProductItem
                                key={x.id}
                                id={x.id}
                                image={x.image}
                                name={x.name}
                                price={x.price}
                                rate={x.rate}
                                totalRates={x.totalRates}
                            />
                        ))
                    }
                </section>

            </section>

        </main>
    )
}


export default ProductsFound