import '@/styles/index.scss'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress 
                height={10} 
            />
            <Component {...pageProps} />
        </>
    )
}
