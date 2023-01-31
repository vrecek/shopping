import Link from 'next/link'
import React from 'react'
import RememberMe from './RememberMe'

const RememberAndForgotPassword = () => {
    return (
        <section>

            <RememberMe />

            <Link href='/'>Forgot password?</Link>

        </section>
    )
}

export default RememberAndForgotPassword