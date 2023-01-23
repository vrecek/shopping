import Icon from '@/components/Common/Icon'
import { Aliases } from '@/util/Client'
import React from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'
import styles from '../../../styles/Home/HomeProducts.module.scss'


const ProductsContainer = ({children}: Aliases.Text<JSX.Element[]>) => {
    const {arrow, 'products-container': pc, 'products-wrapper': pw} = styles

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
        <section className={pc}>

            <Icon action={(e) => scrollProducts(e, 'left')} cname={arrow}>
                <BsArrowLeftCircle />
            </Icon>

            <section className={pw}>

                {children}

            </section>

            <Icon action={(e) => scrollProducts(e, 'right')} cname={arrow}>
                <BsArrowRightCircle />
            </Icon>

        </section>
    )
}


export default ProductsContainer