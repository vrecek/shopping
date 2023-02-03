import { PriceFilter } from "@/interfaces/SearchInterfaces"

const FilterPrice = ({moduleClassname}: PriceFilter) => {
    const filterFunc = (e: React.ChangeEvent): void => {
        const t: HTMLInputElement = e.currentTarget as HTMLInputElement,
              tracker: Element = t.parentElement!.children[0]
        
        
        tracker.textContent = t.value
    }


    return (
        <section className={moduleClassname}>

            <p>0</p>
            <input onChange={filterFunc} type='range' min='0' max='200' step='2' />

        </section>
    )
}


export default FilterPrice