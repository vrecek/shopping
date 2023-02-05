import styles from '@/styles/Product/ProductBottom.module.scss'
import DescriptionSection from './DescriptionSection'


const Description = () => {
    return (
        <section className={ styles['description-section'] }>

            <DescriptionSection />
            <DescriptionSection />

        </section>
    )
}


export default Description