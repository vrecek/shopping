import Button from '@/components/Common/Button'
import Image from '@/components/Common/Image'
import { SlideType } from '@/interfaces/HomeInterfaces'
import React from 'react'
import SlideText from './SlideText'

const OneSlide = ({image, buttonText, buttonUrl, para, header}: SlideType) => {
    return (
        <article>

            <Image source={image} altTxt='Slider' />

            <SlideText 
                para={para}
                header={header}
                buttonUrl={buttonUrl}
                buttonText={buttonText}
            />

        </article>
    )
}

export default OneSlide