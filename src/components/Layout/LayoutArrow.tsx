import Icon from "../Common/Icon"
import {IoIosArrowUp} from 'react-icons/io'


const LayoutArrow = () => {
    return (
        <Icon cname='layout-arrow' action={() => window.scrollTo({left: 0, top: 0, behavior: 'smooth'})}>
            <IoIosArrowUp />
        </Icon>
    )
}


export default LayoutArrow