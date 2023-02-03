import { CategoryFilter } from "@/interfaces/SearchInterfaces"


const FilterCategory = ({categoryName, availableProducts}: CategoryFilter) => {
    return (
        <section>

            <label>
                <input id={categoryName} name='category-select' type="radio" />
                <div></div>
                {categoryName}
            </label>

            <span>{availableProducts}</span>

        </section>
    )
}


export default FilterCategory