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