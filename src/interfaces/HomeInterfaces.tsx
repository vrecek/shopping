import { Aliases } from '@/util/Client'
import {ModuleClassname} from './CommonInterfaces'


export type MovingSliderType = ModuleClassname & {
    slides: SlideType[]
}

export type SlideType = {
    image: string
    header: string
    para: string
    buttonText: string
    buttonUrl: string
}

export type HeaderWrapperType = Aliases.Text<JSX.Element[]> & {
    headerCname: string
    wrapCname: string
}

export type SliderButtonsType = ModuleClassname & {
    imageCount: number
}