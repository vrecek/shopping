import styles from '@/styles/Product/ProductBottom.module.scss'


const DescriptionSection = () => {
    return (
        <section className={ styles['description-object'] }>

            <p className={ styles['header'] }>Product</p>

            <ul>

                {
                    [...Array(5)].map((x, i) => (
                        <li key={i}>

                            <p className={ styles['key'] }>Lorem</p>
                            <p className={ styles['value'] }>Dolore</p>

                        </li>
                    ))
                }

            </ul>

        </section>
    )
}

export default DescriptionSection