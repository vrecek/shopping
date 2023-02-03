import { ModuleClassname } from '@/interfaces/CommonInterfaces'
import Link from 'next/link'
import React from 'react'


const Logo = ({moduleClassname}: ModuleClassname) => {
    return (
        <Link href='/' className={moduleClassname}>
            Fashi<span>on</span>ista
        </Link>
    )
}


export default Logo