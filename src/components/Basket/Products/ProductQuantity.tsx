import Icon from "@/components/Common/Icon"
import { ProductQuantityType } from "@/interfaces/BasketInterfaces"
import React from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"


const ProductQuantity = ({quantity, id, setProducts, totalProducts}: ProductQuantityType) => {
    const modifyQuantity = (type: 'plus' | 'minus'): void => {
        setProducts(curr => {
            const currentProductIndex: number = curr.findIndex(x => x.id === id)

            if (currentProductIndex === -1) 
                return [...curr]

                
            const currentQuantity: number = curr[currentProductIndex].quantity
            

            if (type === 'plus' && currentQuantity < Math.min(totalProducts, 10)) 
                curr[currentProductIndex].quantity += 1

            else if (type === 'minus' && currentQuantity > 1)
                curr[currentProductIndex].quantity -= 1

            else if (type === 'minus' && currentQuantity <= 1) 
                curr.splice(currentProductIndex, 1)
            

            return [...curr]
        })
    }
    

    return (
        <section>

            <Icon action={() => modifyQuantity('minus')}><IoIosArrowBack /></Icon>
            <p>{quantity}</p>
            <Icon action={() => modifyQuantity('plus')}><IoIosArrowForward /></Icon>

        </section>
    )
}


export default ProductQuantity