import Image from '@/components/Common/Image'
import { TileContainerType } from '@/interfaces/HomeInterfaces'
import React from 'react'
import styles from '@/styles/Home/HomeProductsTiles.module.scss'
import ProductRating from '@/components/Common/ProductRating'
import Button from '@/components/Common/Button'
import { useRouter } from 'next/router'
import ProductPrice from '@/components/Common/ProductPrice'


const TileProduct = ({cname, product}: TileContainerType) => {
    const redirect = useRouter().push
    const prodRef = React.useRef<HTMLDivElement>(null)

    
    React.useEffect(() => {
        const article = prodRef.current!,
              image: HTMLElement = article.children[0].children[0] as HTMLElement


        if (image.clientWidth >= article.clientWidth) {
            image.style.width = '80%'
            image.style.height = 'auto'
        } 
    }, [])

    const btnHoverFunc = (e: React.MouseEvent, type: 'in' | 'out'): void => {
        const t: Element = e.currentTarget!;

        (t.parentElement!.parentElement!.children[0] as HTMLElement).style.opacity = 
        type === 'in'
            ? '1'
            : '.3'
    }


    return (
        <article onClick={() => redirect(`/product/${'id'}`)} ref={prodRef} className={cname}>

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

                <ProductPrice
                    discountPercent={3}
                    price={231}
                    cname='home-tiles-price'
                />

                <Button 
                    enter={(e) => btnHoverFunc(e, 'in')} 
                    leave={(e) => btnHoverFunc(e, 'out')}
                >
                    View
                </Button>

            </section>

        </article>
    )
}


export default TileProduct