import Image from "@/components/Common/Image"
import blank from '@/images/blank.png'
import styles from '@/styles/Product/ProductBottom.module.scss'
import CommentDetails from "./CommentDetails"
import UserRating from "./UserRating"


const OneComment = () => {
    return (
        <article>

            <Image source={blank.src} altTxt="User" />

            <section className={ styles['text-wrap'] }>

                <UserRating 
                    moduleClassname={ styles['user-rating'] } 
                    activeClassname={ styles['active-rate'] }
                    rate={4}
                />

                <p className={ styles['text'] }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iure earum veniam error dignissimos, quis, provident libero modi voluptate, unde optio eius consectetur quod reiciendis eos inventore beatae adipisci. Voluptas!</p>

                <CommentDetails
                    
                />

            </section>

        </article>
    )
}


export default OneComment