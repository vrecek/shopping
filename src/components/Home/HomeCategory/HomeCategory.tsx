import styles from '@/styles/Home/HomeCategory.module.scss' 
import CategoryItem from './CategoryItem'
import cat1 from '../../../images/cat1.jpg'
import cat2 from '../../../images/cat2.jpg'


const HomeCategory = () => {
    return (
        <section className={ styles['home-category'] }>

            <CategoryItem
                cname={ styles['item-big'] }
                image={cat1.src}
                category='Sneakers'
            />

            <CategoryItem
                cname={ styles['item-small'] }
                image={cat2.src}
                category='Hoodies'
            />

        </section>
    )
}


export default HomeCategory