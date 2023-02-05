import styles from '@/styles/Product/ProductBottom.module.scss'
import CommentToggler from './CommentToggler'
import OneComment from './OneComment'
import RatingSummary from './RatingSummary'


const Comments = () => {
    return (
        <section className={ styles['comments-section'] }>

            <RatingSummary />            

            <section className={ styles['comments-wrap'] }>

                <CommentToggler 
                    moduleClassname={ styles['comment-toggler'] } 
                />

                <section className={ styles['comments-container'] }>

                    <OneComment />
                    <OneComment />
                    <OneComment />
                    <OneComment />
                    <OneComment />
                    <OneComment />
                    <OneComment />

                </section>

            </section>

        </section>
    )
}


export default Comments