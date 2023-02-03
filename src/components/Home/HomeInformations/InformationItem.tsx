import Button from "@/components/Common/Button"
import Icon from "@/components/Common/Icon"
import { RedirectType } from "@/interfaces/CommonInterfaces"
import { InformationItemType } from "@/interfaces/HomeInterfaces"
import styles from '@/styles/Home/HomeInformations.module.scss'
import { useRouter } from "next/router"
import React from "react"


const InformationItem = ({desc, header, icon, button}: InformationItemType) => {
    const redirect: RedirectType = useRouter().push

    const btnHover = (e: React.MouseEvent): void => {
        (e.currentTarget as Element).parentElement!.classList.add(styles['active'])
    }
    const btnHoverOut = (e: React.MouseEvent): void => {
        (e.currentTarget as Element).parentElement!.classList.remove(styles['active'])
    }


    return (
        <article>

            <Icon>{icon}</Icon>

            <p className={ styles['header'] }>{header}</p>
            <p className={ styles['desc'] }>{desc}</p>

            {
                button &&
                    <Button 
                        enter={btnHover}
                        leave={btnHoverOut}
                        action={() => redirect(button.url)} 
                    >
                        {button.str}
                    </Button>
            }

        </article>
    )
}


export default InformationItem