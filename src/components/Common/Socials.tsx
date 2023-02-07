import { ModuleClassname, SocialsType } from "@/interfaces/CommonInterfaces"
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook, BsGithub } from "react-icons/bs"
import Icon from "./Icon"

const Socials = ({moduleClassname}: ModuleClassname) => {
    const socials: SocialsType[] = [
        {icon: <BsGithub />, url: '/'},
        {icon: <BsFacebook />, url: '/'},
        {icon: <AiFillInstagram />, url: '/'},
        {icon: <AiFillTwitterCircle />, url: '/'}
    ]


    return (
        <section className={moduleClassname}>

            {
                socials.map((x, i) => (
                    <Icon key={i} action={() => window.open(x.url, '_blank')}>
                        {x.icon}
                    </Icon>
                ))
            }

        </section>
    )
}


export default Socials