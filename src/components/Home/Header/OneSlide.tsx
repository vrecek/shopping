import Image from '@/components/Common/Image'
import { SlideType } from '@/interfaces/HomeInterfaces'
import React from 'react'

const OneSlide = ({image, buttonText, buttonUrl, para, header}: SlideType) => {
    return (
        <article>

            <Image source={image} altTxt='Slider' />

        </article>
    )
}

export default OneSlide