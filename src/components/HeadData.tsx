import { Aliases } from '@/util/Client'
import Head from 'next/head'
import React from 'react'


type HeadDataType = Aliases.Text<JSX.Element | JSX.Element[]> & {
    title?: string
}


const HeadData = ({children, title}: HeadDataType) => {
    return (
        <>
            <Head>
                <title>{title ?? 'Shopping'}</title>
                <meta name="description" content="Get yourself your favourite clothes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="/icon.png" />
            </Head>

            { children }

        </>
    )
}


export default HeadData