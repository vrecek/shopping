import LayoutWrap from '@/components/Layout/LayoutWrap'
import React from 'react'
import styles from '@/styles/Contact/Contact.module.scss'
import ContactHeader from '@/components/Contact/ContactHeader'
import ContactInformations from '@/components/Contact/ContactInformations/ContactInformations'
import ContactForm from '@/components/Contact/ContactForm/ContactForm'


const ContactPage = () => {
    return (
        <LayoutWrap onlyCenter={true} title='Contact'>

            <main className={ styles['contact-page'] }>

                <ContactHeader />
                
                <section className={ styles['sections-wrap'] }>

                    <ContactInformations />
                    <ContactForm />

                </section>

            </main>

        </LayoutWrap>
    )
}


export default ContactPage