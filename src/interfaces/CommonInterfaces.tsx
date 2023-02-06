import { Aliases } from "@/util/Client"
import { NavigationWrapType } from "./NavigationInterfaces"

export type LinkOptions = {
    url: string
    text: string
    icon?: JSX.Element
    cname?: string
}

export type ModuleClassname = {
    moduleClassname: string
}

export type ProductRatingType = {
    rate: number
    activeClass: string
    totalRates: number
    containerClass?: string
}

export type ProductAvailableType = {
    productsNum: number
    containerClass?: string
}

export type HeadDataOptions = Aliases.Text<JSX.Element> & {
    title?: string
}

export type LayoutWrapType = HeadDataOptions & NavigationWrapType

export type RedirectType = (url: string) => void

export type KeyValue = {
    what: string
    value: string | number
    cname?: string
}

export type PageParams<T> = {
    params: T
}

export type IconText = {
    icon: JSX.Element
    text: string
}

export type PriceType = {
    price: number
    discountPercent: number
    cname?: string
    showPercent?: boolean
}