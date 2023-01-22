import React from 'react'

type IconOptions = {
    children: JSX.Element
    cname?: string
    action?: React.MouseEventHandler
}


const Icon = ({children, cname, action}: IconOptions) => {
    return (
        <span onClick={action} className={cname ?? 'icon'}>

            {children}

        </span>
    )
}


export default Icon