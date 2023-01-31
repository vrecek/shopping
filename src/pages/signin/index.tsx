import React from 'react'
import styles from '@/styles/LogReg/LogReg.module.scss'
import HeadData from '@/components/HeadData'
import Logo from '@/components/Layout/Navigation/NavigationCenter/Logo'
import Button from '@/components/Common/Button'
import InputDiv from '@/components/LogReg/InputDiv'
import RememberAndForgotPassword from '@/components/LogReg/Signin/RememberAndForgotPassword'
import AccountReminder from '@/components/LogReg/AccountReminder'


const SignIn = () => {
    const submitLogin = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault()
    }


    return (
        <HeadData title='Sign in to your account'>

            <main className={ styles['sign-in'] }>

                <form onSubmit={submitLogin}>

                    <Logo moduleClassname={ styles['logo'] } />

                    <InputDiv label='Username' type='text' />

                    <InputDiv label='Password' type='password' />
                    <RememberAndForgotPassword />

                    <Button text='Sign in' />
                    <AccountReminder type='noAccount' />

                </form>

            </main>

        </HeadData>
    )
}


export default SignIn