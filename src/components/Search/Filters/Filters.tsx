import FilterCategory from "./FilterCategory"
import styles from '@/styles/Search/Search.module.scss'
import { CategoryFilter, FilterSet } from "@/interfaces/SearchInterfaces"
import FilterPrice from "./FilterPrice"
import FiltersText from "./FiltersText"
import { Aliases } from "@/util/Client"


const Filters = ({filterProducts}: FilterSet) => {
    const MAX_PRICE_VALUE: number = 200

    const f: CategoryFilter[] = [
        { availableProducts: 50, categoryName: 'All' },
        { availableProducts: 50, categoryName: 'T-shirts' },
        { availableProducts: 50, categoryName: 'Footwear' },
        { availableProducts: 50, categoryName: 'Hats' },
        { availableProducts: 50, categoryName: 'Accessories' },
    ]

    const changeFilters = (e: React.FormEvent): void => {
        e.preventDefault()

        const form: HTMLFormElement = e.currentTarget as HTMLFormElement,
              [price, ...categories]: HTMLInputElement[] = [...form.elements as Aliases.Inputs]


        filterProducts(curr => {
            // const filteredProducts: ProductItemType[] = []

            // curr.products = filteredProducts

            return {...curr}
        })        
    }


    return (
        <form onSubmit={changeFilters} className={ styles['filter-form'] }>

            <FiltersText moduleClassname={ styles['div-text'] } />

            <FilterPrice 
                MAX_PRICE_VALUE={MAX_PRICE_VALUE}
                moduleClassname={ styles['filter-price'] } 
            />

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

        </form>
    )
}


export default Filters