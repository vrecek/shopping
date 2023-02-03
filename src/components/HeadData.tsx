import { HeadDataOptions } from '@/interfaces/CommonInterfaces'
import Head from 'next/head'
import React from 'react'


const HeadData = ({children, title}: HeadDataOptions) => {
    return (
        <>
            <Head>
                <title>{title ?? 'Fashionista'}</title>
                <meta name="description" content="Get yourself your favourite clothes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="/icon.png" />
            </Head>

            { children }

        </>
    )
}


export default HeadData