import Icon from "@/components/Common/Icon"
import styles from '@/styles/Home/HomeRandom.module.scss'
import { RandomLeftElementType } from "@/interfaces/HomeInterfaces"


const InformationElement = ({icon, header, value}: RandomLeftElementType) => {
    return (
        <li>

            <span className={ styles['parent-icon'] }>
                <Icon>{icon}</Icon>
            </span>

            <div>

                <p className={ styles['type'] }>{header}</p>
                <p className={ styles['value'] }>{value}</p>

            </div>

        </li>
    )
}


export default InformationElement