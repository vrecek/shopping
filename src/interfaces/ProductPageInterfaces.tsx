import { DD } from "@/util/Client"
import { ModuleClassname } from "./CommonInterfaces"

export type ProductImageType = {
    productImages: string[]
    productName: string
}

export type OrderSize = string | null

export type AdditionalImagesType =  ProductImageType & {
    activeClassname: string
}

export type SelectSizeType = ModuleClassname & {
    setSize: React.Dispatch<React.SetStateAction<OrderSize>>
    sizes: string[]
    currentSize: OrderSize
}

export type ProductRightType = {
    sizes: string[]
}

export type SizeTogglerType = {
    dropdown: DD.DropDown
    currentSize: OrderSize
}

export enum DisplaySections {
    COMMENTS = 'COMMENTS',
    DESCRIPTION = 'DESCRIPTION'
}

export type SelectSectionList = {
    name: string
    setArg: DisplaySections
}

export type DisplaySelectType = {
    setDisplay: React.Dispatch<React.SetStateAction<JSX.Element>>
}

export type UserRatingType = ModuleClassname & {
    rate: number
    activeClassname: string
}