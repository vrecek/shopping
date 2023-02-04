import Icon from "@/components/Common/Icon"
import { IconText, ModuleClassname } from "@/interfaces/CommonInterfaces"
import { BiSupport } from "react-icons/bi"
import { BsCoin } from "react-icons/bs"
import { FiTruck } from "react-icons/fi"


const MiscInformations = ({moduleClassname}: ModuleClassname) => {
    const infos: IconText[] = [
        { icon: <FiTruck />, text: 'Fast delivery' },
        { icon: <BsCoin />, text: 'Get 10 fashion coins' },
        { icon: <BiSupport />, text: '24/7 Support' }
    ]


    return (
        <section className={moduleClassname}>

            {
                infos.map((x, i) => (
                    <div key={i}>

                        <Icon>{x.icon}</Icon>
                        <p>{x.text}</p>

                    </div>
                ))
            }

        </section>
    )
}


export default MiscInformations