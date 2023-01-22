import React from 'react'

type ImageOptions = {
    source: string
    altTxt?: string
    cname?: string
    action?: (e: React.MouseEvent, src: string) => void
}


const Image = ({cname, altTxt, source, action}: ImageOptions) => {
    const blank = ()=>{}

    return (
        <figure onClick={action ? (e) => action(e, source) : blank} className={cname ?? ''}>

            <img src={source} alt={altTxt ?? 'Image'} />

        </figure>
    )
}


export default Image