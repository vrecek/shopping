import { Aliases } from '@/util/Client'
import Head from 'next/head'
import React from 'react'


const HeadData = ({children}: Aliases.Text<JSX.Element | JSX.Element[]>) => {
    return (
        <>
            <Head>
                <title>Shopping</title>
                <meta name="description" content="Get yourself your favourite clothes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="/icon.png" />
            </Head>

            { children }

        </>
    )
}


export default HeadData