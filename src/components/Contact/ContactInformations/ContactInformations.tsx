import Socials from '@/components/Common/Socials'
import LeftInformationsTextHeader from './LeftInformationsTextHeader'
import styles from '@/styles/Contact/Contact.module.scss'
import InfoDetails from './InfoDetails'


const ContactInformations = () => {
    return (
        <article>

            <div>
                <LeftInformationsTextHeader moduleClassname={ styles['left-text-header'] } />    

                <InfoDetails />
            </div>

            <Socials moduleClassname={ styles['socials-section'] } />        

        </article>
    )
}


export default ContactInformations