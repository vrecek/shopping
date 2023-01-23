import styles from '../../../styles/Home/HomeProducts.module.scss'
import DescriptionBar from './DescriptionBar'
import ProductItem from './ProductItem'
import ProductsContainer from './ProductsContainer'
import product from '../../../images/product.png'
import { ProductItemType } from '@/interfaces/HomeInterfaces'


const HomeProducts = () => {
    const prods: ProductItemType[] = [
        {
            image: product.src,
            id: '1',
            price: 999,
            name: 'Lorem ipsum dolor',
            rate: 4,
            totalRates: 50
        },
        {
            image: product.src,
            id: '2',
            price: 999,
            name: 'Conqestur elit escipsis',
            rate: 4,
            totalRates: 50
        },
        {
            image: product.src,
            id: '3',
            price: 999,
            name: 'Sit amet lorem dolor ipsumsit test ipsumsit test ipsumsit test',
            rate: 3,
            totalRates: 50
        },
        {
            image: product.src,
            id: '4',
            price: 999,
            name: 'Elit doloresit',
            rate: 2,
            totalRates: 50
        },
        {
            image: product.src,
            id: '5',
            price: 999,
            name: 'Dolore lorem sit ipsum',
            rate: 5,
            totalRates: 50
        }
    ]


    return (
        <section className={ styles['home-products'] }>

            <DescriptionBar />

            <ProductsContainer>

                {
                    prods.map(x => (
                        <ProductItem
                            key={x.id}
                            id={x.id}
                            totalRates={x.totalRates}
                            image={x.image}
                            name={x.name}
                            rate={x.rate}
                            price={x.price}
                        />
                    ))
                }

            </ProductsContainer>

        </section>
    )
}


export default HomeProducts