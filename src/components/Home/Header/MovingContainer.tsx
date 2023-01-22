import { MovingSliderType, SlideType } from '@/interfaces/HomeInterfaces'
import { getSlide, intervalSliderFunc, INTERVAL_TIME, setSlide } from '@/util/SliderFunctions'
import React from 'react'
import OneSlide from './OneSlide'
import styles from '@/styles/Home/Header.module.scss'


const MovingContainer = ({slides, setSliderInterval}: MovingSliderType) => {
    const sliderRef = React.useRef<HTMLDivElement>(null)
          

    React.useEffect(() => {
        const c = sliderRef.current!,
              btnCont: HTMLElement = c.parentElement!.children[1] as HTMLElement


        setSliderInterval(
            setInterval(() => intervalSliderFunc(c), INTERVAL_TIME)
        )


        c.addEventListener('transitionend', () => {
            const slideNr: number = getSlide(c),
                  activeClass: string = styles['slider-button-active']


            for (const btn of [...btnCont.children])
                btn.className = ''


            if (slideNr >= slides.length + 2) {
                c.style.transition = '0s'
                c.style.translate = '-100% 0'

                setSlide(c, 2)

                btnCont.children[0].className = activeClass

                return
            }

            btnCont.children[slideNr - 2].className = activeClass
        })
    }, [])


    return (
        <div ref={sliderRef} className={ styles['moving-container'] }>

            {
                [slides.slice(-1)[0], ...slides, slides[0]].map((x, i) => (
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