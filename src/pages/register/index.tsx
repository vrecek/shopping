import HeadData from '@/components/HeadData'
import Logo from '@/components/Layout/Navigation/NavigationCenter/Logo'
import React from 'react'
import styles from '@/styles/LogReg/LogReg.module.scss'
import InputDiv from '@/components/LogReg/InputDiv'
import Button from '@/components/Common/Button'
import AccountReminder from '@/components/LogReg/AccountReminder'
import ReCaptcha from 'react-google-recaptcha'


const Register = () => {
    const captchaRef = React.useRef<ReCaptcha>(null)

    const submitRegister = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
    }


    return (
        <HeadData title='Create new account'>

            <main className={ styles['register'] }>

                <form onSubmit={submitRegister}>

                    <Logo moduleClassname={ styles['logo'] } />

                    <InputDiv label='Username' type='text' />
                    <InputDiv label='E-mail' type='text' />

                    <InputDiv label='Password' type='password' />
                    <InputDiv label='Confirm password' type='password' />

                    {/* <div className={ styles['recaptcha-container'] }>
                        <ReCaptcha
                            sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA!}
                            style={{display: 'inline-block', float: 'left'}}
                            ref={captchaRef}
                        />
                    </div> */}

                    <Button>Create account</Button>
                    <AccountReminder type='gotAccount' />

                </form>

            </main>

        </HeadData>
    )
}


export default Register