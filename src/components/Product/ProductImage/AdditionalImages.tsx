import Image from '@/components/Common/Image'
import { AdditionalImagesType } from '@/interfaces/ProductPageInterfaces'
import React from 'react'


const AdditionalImages = ({productImages, productName, activeClassname}: AdditionalImagesType) => {
    const changeImage = (e: React.MouseEvent, clickedSrc: string): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement,
              mainImage: HTMLImageElement = t.parentElement!.parentElement!.children[1].children[0] as HTMLImageElement,
              imageChildren: Element[] = [...t.parentElement!.children]
        

        for (const image of imageChildren)
            image.className = ''

        t.className = activeClassname
        mainImage.src = clickedSrc
    }


    return (
        <section>

            {
                productImages.map((x, i) => (
                    <Image 
                        key={i}
                        cname={i === 0 ? activeClassname : ''}
                        source={x} 
                        altTxt={productName} 
                        action={(e) => changeImage(e, x)}
                    />
                ))
            }

        </section>
    )
}


export default AdditionalImages