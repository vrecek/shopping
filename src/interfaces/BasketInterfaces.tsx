export type BasketItem = {
    quantity: number
    id: string
}


export type ProductsComponentType = BasketStateDispatch & {
    products: BasketItem[]
    totalProducts: number
}


type BasketStateDispatch = {
    setProducts: React.Dispatch<React.SetStateAction<BasketItem[]>>
}


export type BasketItemData = BasketItem & BasketStateDispatch & {
    totalProducts: number
}


export type ProductQuantityType = BasketStateDispatch & {
    quantity: number
    id: string
    totalProducts: number
}

export type BasketProps = {
    basketProducts: BasketItem[]
    totalProducts: number
}