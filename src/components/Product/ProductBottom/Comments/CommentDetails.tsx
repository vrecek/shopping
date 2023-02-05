import styles from '@/styles/Product/ProductBottom.module.scss'


const CommentDetails = () => {
    return (
        <section className={ styles['comment-details'] }>

            <p className={ styles['username'] }>vrecek</p>
            <p className={ styles['date'] }>12.12.2022</p>

        </section>
    )
}


export default CommentDetails