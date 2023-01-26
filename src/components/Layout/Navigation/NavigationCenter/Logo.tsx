import Link from 'next/link'
import React from 'react'


const Logo = ({cname}: {cname: string}) => {
    return (
        <Link href='/' className={cname}>
            Sho<span>pp</span>ing
        </Link>
    )
}


export default Logo