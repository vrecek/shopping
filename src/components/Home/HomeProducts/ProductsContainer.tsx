import Icon from '@/components/Common/Icon'
import { Aliases } from '@/util/Client'
import React from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'


const ProductsContainer = ({children}: Aliases.Text<JSX.Element[]>) => {
    const scrollProducts = (e: React.MouseEvent, direction: 'left' | 'right'): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement,
              svg: HTMLElement = t.children[0] as HTMLElement,
              container: HTMLElement = t.parentElement!.children[1] as HTMLElement

        const itemWidth: number = container.children[0].clientWidth,
              currentScroll = container.scrollLeft

        container.scrollTo({
            top: 0,
            left: currentScroll + (direction === 'left' ? -itemWidth : itemWidth),
            behavior: 'smooth'
        })

        svg.style.scale = '.8'
        setTimeout(() => svg.style.scale = '1', 300)
    }


    return (
        <section className='basic-products-container'>

            <Icon action={(e) => scrollProducts(e, 'left')} cname='arrow'>
                <BsArrowLeftCircle />
            </Icon>

            <section className='products-wrapper'>

                {children}

            </section>

            <Icon action={(e) => scrollProducts(e, 'right')} cname='arrow'>
                <BsArrowRightCircle />
            </Icon>

        </section>
    )
}


export default ProductsContainer