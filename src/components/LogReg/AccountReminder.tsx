import Link from 'next/link'
import React from 'react'

const AccountReminder = ({type}: {type: 'gotAccount' | 'noAccount'}) => {
    return (
        type === 'gotAccount'
            ? <Link href='/signin'>Got account? Sign in here</Link>
            : <Link href='/register'>No account? Create it here</Link>
    )
}

export default AccountReminder