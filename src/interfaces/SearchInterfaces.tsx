import { ModuleClassname } from "./CommonInterfaces"
import { ProductItemType } from "./HomeInterfaces"

export type SearchParams = {
    params: {
        type: 'bar' | 'category'
        query: string
    }
}

export type SearchProps = {
    query: string
    products: ProductItemType[]
}

export type QueryInfoType = {
    query: string
    isFound: boolean
    cname: string
}

export type CategoryFilter = {
    categoryName: string
    availableProducts: number
}

export type PriceFilter = ModuleClassname & {

}