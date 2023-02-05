import Icon from "@/components/Common/Icon"
import { ModuleClassname } from "@/interfaces/CommonInterfaces"
import Client, { DD } from "@/util/Client"
import React from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

const CommentToggler = ({moduleClassname}: ModuleClassname) => {
    const [dd] = React.useState<DD.DropDown>(new Client.DropDown(500))

    const toggleComments = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.currentTarget as HTMLElement,
              comments: HTMLElement = t.parentElement!.children[1] as HTMLElement,
              arrow: HTMLElement = t.children[1] as HTMLElement

        
        dd.getActive
            ? dd.expandMenu(comments)
            : dd.shrinkMenu(comments)

        dd.switchActive()
        dd.rotateArrow(arrow)
    }


    return (
        <div onClick={toggleComments} className={moduleClassname}>

            <p>Comments (99)</p>

            <Icon><MdKeyboardArrowDown /></Icon>

        </div>
    )
}


export default CommentToggler