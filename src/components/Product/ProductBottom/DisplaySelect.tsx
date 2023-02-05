import { DisplaySections, DisplaySelectType, SelectSectionList } from '@/interfaces/ProductPageInterfaces'
import styles from '@/styles/Product/ProductBottom.module.scss'
import Comments from './Comments/Comments'
import Description from './Description/Description'


const DisplaySelect = ({setDisplay}: DisplaySelectType) => {
    const list: SelectSectionList[] = [
        {name: 'Description', setArg: DisplaySections.DESCRIPTION},
        {name: 'Comments', setArg: DisplaySections.COMMENTS}
    ]

    const changeDisplay = (e: React.MouseEvent, arg: DisplaySections): void => {
        const t: HTMLElement = e.currentTarget! as HTMLElement,
              indicator: HTMLElement = document.querySelector(`.${styles['display-span-indicator']}`) as HTMLElement


        indicator.style.left = `calc(${t.offsetLeft}px - 2em)`
        indicator.style.width = `${t.clientWidth}px`

        
        switch (arg) {
            case DisplaySections.COMMENTS:
                setDisplay(<Comments />)
            break;

            case DisplaySections.DESCRIPTION:
                setDisplay(<Description />)
            break;

            default: break;
        }
    }


    return (
        <ul className={ styles['display-select'] }>

            {
                list.map((x, i) => (
                    <li onClick={(e) => changeDisplay(e, x.setArg)} key={i} >

                        { i === 0 && <span className={ styles['display-span-indicator'] }></span>}
                        {x.name}

                    </li>
                ))
            }

        </ul>
    )
}


export default DisplaySelect