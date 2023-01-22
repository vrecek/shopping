const setSlide = (slider: HTMLElement, nr: number): void => slider.setAttribute('slide', nr.toString())
const getSlide = (slider: HTMLElement): number => parseInt(slider.getAttribute('slide') ?? '2')
const getSliderComponent = (): HTMLElement | null => document.querySelector('.home-header-container') ?? null

const intervalSliderFunc = (slider: HTMLElement): void => {
    if (!document.hasFocus()) return

    const slideNr: number = getSlide(slider)

    slider.style.transition = '.5s'
    slider.style.translate = `-${slideNr * 100}% 0`

    setSlide(slider, slideNr + 1)
} 

const INTERVAL_TIME: number = 6000

export {
    setSlide,
    getSlide,
    intervalSliderFunc,
    getSliderComponent,
    INTERVAL_TIME
}