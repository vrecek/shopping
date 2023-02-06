import { PriceType } from "@/interfaces/CommonInterfaces"
import getDiscountPrice from "@/util/getDiscountPrice"


const ProductPrice = ({price, discountPercent, cname, showPercent}: PriceType) => {
    const discountedPrice: number = getDiscountPrice(price, discountPercent)
    const isDiscounted: boolean = discountedPrice !== 0

    
    return (
        <p className={`${cname} ${isDiscounted ? 'discount' : ''} item-price`}>

            <span className="original-price">{price}</span>

            {
                isDiscounted 
                    && <span className="discount-price">{discountedPrice}</span>
            }

            {
                isDiscounted && showPercent
                    && <span className="discount-percent">-{discountPercent}%</span>
            }

        </p>
    )
}


export default ProductPrice