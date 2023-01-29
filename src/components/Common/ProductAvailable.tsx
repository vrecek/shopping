import { ProductAvailableType } from '@/interfaces/CommonInterfaces'
import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Icon from './Icon'


const ProductAvailable = ({productsNum, containerClass, paraClass}: ProductAvailableType) => {
    const quantitySection = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const thumb: HTMLElement = (quantitySection.current!).children[0] as HTMLElement

        const perc: number = productsNum >= 200 
            ? 100
            : 100 * productsNum / 200

        thumb.style.left = `${perc}%`
    }, [])


    return (
        <section className={containerClass}>

            <p className={paraClass}>
                <Icon><AiOutlineCheckCircle /></Icon>
                Available
            </p>

            <section ref={quantitySection}>
                <span data-products={productsNum}></span>
            </section>

        </section>
    )
}


export default ProductAvailable