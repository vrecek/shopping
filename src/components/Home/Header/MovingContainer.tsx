import Image from '@/components/Common/Image'
import { MovingSliderType } from '@/interfaces/HomeInterfaces'
import React from 'react'
import OneSlide from './OneSlide'


const MovingContainer = ({moduleClassname, slides}: MovingSliderType) => {
    return (
        <div className={moduleClassname}>

            {
                slides.map((x, i) => (
                    <OneSlide 
                        key={i}
                        image={x.image}
                        buttonText={x.buttonText}
                        buttonUrl={x.buttonUrl}
                        header={x.header}
                        para={x.para}
                    />
                ))
            }

        </div>
    )
}


export default MovingContainer