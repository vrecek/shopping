import { ProductAvailableType } from '@/interfaces/CommonInterfaces'
import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import Icon from './Icon'


const ProductAvailable = ({productsNum, containerClass}: ProductAvailableType) => {
    const quantitySection = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const thumb: HTMLElement = (quantitySection.current!).children[0] as HTMLElement,
              p: Element = (quantitySection.current!).parentElement!.children[0]


        const perc: number = productsNum >= 200 
            ? 100
            : 100 * productsNum / 200


        let paragraphClass: string = 'red'
        let paragraphText: string = 'Not available'

        if (perc === 100) {
            paragraphText = 'Available'
            paragraphClass = 'green'

        } else if (perc >= 40) {
            paragraphText = 'Many products left'
            paragraphClass = 'yellow'

        } else if (perc > 0) {
            paragraphText = 'Few products left'
            paragraphClass = 'orange'

        }
         
        p.children[1].textContent = paragraphText
        p.className = paragraphClass

        thumb.style.left = `${perc}%`
    }, [])


    return (
        <section className={containerClass ?? 'product-in-stock'}>

            <div>
                <Icon><AiOutlineCheckCircle /></Icon>
                <p></p>
            </div>

            <section ref={quantitySection}>
                <span data-products={productsNum}></span>
            </section>

        </section>
    )
}


export default ProductAvailable