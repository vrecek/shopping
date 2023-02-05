import Icon from "@/components/Common/Icon"
import { UserRatingType } from "@/interfaces/ProductPageInterfaces"
import { AiOutlineStar } from "react-icons/ai"

const UserRating = ({moduleClassname, rate, activeClassname}: UserRatingType) => {
    return (
        <section className={moduleClassname}>

            {
                [...Array(5)].map((x, i) => (
                    <Icon cname={i < rate ? activeClassname : ''} key={i}>
                        <AiOutlineStar />   
                    </Icon>
                ))
            }

        </section>
    )
}


export default UserRating