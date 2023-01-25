import Image from '@/components/Common/Image'
import { TileContainerType } from '@/interfaces/HomeInterfaces'
import React from 'react'
import styles from '@/styles/Home/HomeProductsTiles.module.scss'
import ProductRating from '@/components/Common/ProductRating'
import Button from '@/components/Common/Button'


const TileProduct = ({cname, product}: TileContainerType) => {
    const prodRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const article = prodRef.current!,
              image: HTMLElement = article.children[0].children[0] as HTMLElement


        if (image.clientWidth >= article.clientWidth) {
            image.style.width = '80%'
            image.style.height = 'auto'
        } 
    }, [])

    const btnHover = (e: React.MouseEvent): void => {
        const t: Element = e.currentTarget!;

        (t.parentElement!.parentElement!.children[0] as HTMLElement).style.opacity = '1'
    }

    const btnHoverOut = (e: React.MouseEvent): void => {
        const t: Element = e.currentTarget!;

        (t.parentElement!.parentElement!.children[0] as HTMLElement).style.opacity = '.3'
    }


    return (
        <article ref={prodRef} className={cname}>

            <Image source={product.image} />

            <section className={ styles['text-container'] }>

                <div>
                    <p className={ styles['company'] }>Company</p>
                    <p className={ styles['name'] }>Lorem ipsuym dolorsit</p>
                </div>

                <ProductRating 
                    containerClass={ styles['rating'] } 
                    rate={4} 
                    totalRates={23} 
                    activeClass={ styles['active'] } 
                />

                <p className={ styles['price'] }>999</p>

                <Button 
                    text='View'
                    enter={btnHover} 
                    leave={btnHoverOut}
                />

            </section>

        </article>
    )
}


export default TileProduct