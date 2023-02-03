import Products from "@/components/Basket/Products/Products"
import Summary from "@/components/Basket/Summary/Summary"
import LayoutWrap from "@/components/Layout/LayoutWrap"
import { BasketItem, BasketProps } from "@/interfaces/BasketInterfaces"
import styles from '@/styles/Basket/Basket.module.scss'
import React from "react"


const Basket = ({basketProducts, totalProducts}: BasketProps) => {
    const [products, setProducts] = React.useState<BasketItem[]>(basketProducts)


    return (
        <LayoutWrap onlyCenter={true} title="Basket">

            <main className={ styles['user-basket'] }>

                <Products 
                    setProducts={setProducts} 
                    products={products} 
                    totalProducts={totalProducts}
                />
                <Summary />

            </main>

        </LayoutWrap>
    )
}


const getServerSideProps = async () => {
    const basketProducts: BasketItem[] = [{},{},{}].map((x, i) => { 
        return { 
            quantity: 1, 
            id: i.toString() 
        }
    })

    return {
        props: {
            basketProducts,
            totalProducts: 7
        }
    }
}


export {getServerSideProps}
export default Basket