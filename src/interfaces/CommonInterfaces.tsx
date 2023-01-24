export type LinkOptions = {
    url: string
    text: string
    icon?: JSX.Element
}

export type ModuleClassname = {
    moduleClassname: string
}

export type ProductRatingType = {
    rate: number
    activeClass: string
    totalRates: number
}

export type RedirectType = (url: string) => void