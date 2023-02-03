import FilterCategory from "./FilterCategory"
import styles from '@/styles/Search/Search.module.scss'
import { CategoryFilter } from "@/interfaces/SearchInterfaces"
import FilterPrice from "./FilterPrice"


const Filters = () => {
    const f: CategoryFilter[] = [
        { availableProducts: 50, categoryName: 'All' },
        { availableProducts: 50, categoryName: 'T-shirts' },
        { availableProducts: 50, categoryName: 'Footwear' },
        { availableProducts: 50, categoryName: 'Hats' },
        { availableProducts: 50, categoryName: 'Accessories' },
    ]


    return (
        <aside className={ styles['filter-aside'] }>

            <h3>Filters</h3>

            <FilterPrice moduleClassname={ styles['filter-price'] } />

            <section className={ styles['filter-categories'] }>
                {
                    f.map(x => (
                        <FilterCategory
                            availableProducts={x.availableProducts}
                            categoryName={x.categoryName}
                            key={x.categoryName}
                        />
                    ))
                }
            </section>

        </aside>
    )
}


export default Filters