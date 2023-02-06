const getDiscountPrice = (originalPrice: number, discountPercent: number): number => {
    if (discountPercent <= 0) return originalPrice

    return parseFloat(`${originalPrice - (originalPrice / 100 * discountPercent)}`)
}


export default getDiscountPrice