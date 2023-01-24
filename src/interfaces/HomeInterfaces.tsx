import { Aliases } from '@/util/Client'

// HEADER SLIDER

export type SliderInterval = {
    setSliderInterval: React.Dispatch<React.SetStateAction<NodeJS.Timer | null>>
}

export type MovingSliderType = SliderInterval & {
    slides: SlideType[]
}

export type SlideType = SlideTextType & {
    image: string
}

export type SlideTextType = {
    header: string
    para: string
    buttonText: string
    buttonUrl: string
}

export type HeaderWrapperType = Aliases.Text<JSX.Element[]> & {
    headerCname: string
    wrapCname: string
}

export type SliderButtonsType = SliderInterval & {
    imageCount: number
    sliderInterval: NodeJS.Timer | null
}

//////////////////////////////////////////////////

// PRODUCT ITEMS

export type ProductItemType = {
    id: string
    image: string
    name: string
    rate: number
    price: number
    totalRates: number
}

//////////////////////////////////////////////////

// CATEGORY PRODUCTS

export type CategoryItemType = {
    cname: string
    image: string
    category: string
}