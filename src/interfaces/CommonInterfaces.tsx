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

export type RedirectType = (url: string) => void