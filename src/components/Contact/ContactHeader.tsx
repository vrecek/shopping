import Image from '@/components/Common/Image'
import contactImage from '@/images/contact.jpg'


const ContactHeader = () => {
    return (
        <header>

            <Image source={contactImage.src} altTxt='Background' />

            <h1>Contact us</h1>

        </header>
    )
}


export default ContactHeader