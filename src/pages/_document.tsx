import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" /> 
                <link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>

        </Html>
    )
}
