import { PriceFilter } from "@/interfaces/SearchInterfaces"

const FilterPrice = ({moduleClassname, MAX_PRICE_VALUE}: PriceFilter) => {
    const filterFunc = (e: React.ChangeEvent): void => {
        const t: HTMLInputElement = e.currentTarget as HTMLInputElement,
              tracker: Element = t.parentElement!.children[0]
        
        const value: number = parseInt(t.value)

        
        if (value === 0) {
            tracker.textContent = 'Any price'

        } else if (value === MAX_PRICE_VALUE) {
            tracker.textContent = `${value}$ +`

        } else {
            tracker.textContent = `< ${value}$`
        }
    }


    return (
        <section className={moduleClassname}>

            <p>Any price</p>
            <input 
                onChange={filterFunc} 
                type='range' 
                min='0' 
                max={MAX_PRICE_VALUE} 
                defaultValue={0}
                step='2' 
            />

        </section>
    )
}


export default FilterPrice