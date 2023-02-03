import LayoutWrap from "@/components/Layout/LayoutWrap"
import ProductsEmpty from "@/components/Search/ProductsEmpty"
import ProductsFound from "@/components/Search/ProductsFound"
import { ProductItemType } from "@/interfaces/HomeInterfaces"
import { SearchParams, SearchProps } from "@/interfaces/SearchInterfaces"


const SearchPage = ({products, query}: SearchProps) => {
    return (
        <LayoutWrap onlyCenter={true} title="Search">

            {
                products?.length
                    ? <ProductsFound query={query} products={products} />
                    : <ProductsEmpty query={query} />
            }

        </LayoutWrap>
    )
}


const getServerSideProps = async ({ params: { query, type } }: SearchParams) => {
    if (type !== 'bar' && type !== 'category') 
        return {
            redirect: {
                permament: false,
                destination: '/404'
            }
        }


    const foundProducts: ProductItemType[] = [
        {
            id: '1',
            image: 'http://localhost:3000/_next/static/media/product.f7b1d904.png',
            name: 'Conqestur elit scripscis',
            price: 121,
            rate: 3,
            totalRates: 233
        },
        {
            id: '2',
            image: 'http://localhost:3000/_next/static/media/product.f7b1d904.png',
            name: 'Conqestur elit scripscis',
            price: 121,
            rate: 3,
            totalRates: 233
        },
        {
            id: '3',
            image: 'http://localhost:3000/_next/static/media/product.f7b1d904.png',
            name: 'Conqestur elit scripscis',
            price: 121,
            rate: 3,
            totalRates: 233
        },
        {
            id: '4',
            image: 'http://localhost:3000/_next/static/media/product.f7b1d904.png',
            name: 'Conqestur elit scripscis',
            price: 121,
            rate: 3,
            totalRates: 233
        },
        {
            id: '5',
            image: 'http://localhost:3000/_next/static/media/product.f7b1d904.png',
            name: 'Conqestur elit scripscis',
            price: 121,
            rate: 3,
            totalRates: 233
        },
        {
            id: '6',
            image: 'http://localhost:3000/_next/static/media/product.f7b1d904.png',
            name: 'Conqestur elit scripscis',
            price: 121,
            rate: 3,
            totalRates: 233
        }
    ]


    return {
        props: {
            query,
            products: foundProducts
        }
    }
}


export {getServerSideProps}
export default SearchPage