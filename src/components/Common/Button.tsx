import React from 'react'

type ButtonOptions = {
    text: string
    additional?: JSX.Element | string | number
    cname?: string
    action?: React.MouseEventHandler
}


const Button = ({text, additional, cname, action}: ButtonOptions) => {
    return (
        <button onClick={action} className={cname ?? ''}>

            <label>
                {text}
            </label>

            {
                additional
                    && <span>
                            {additional}
                        </span>
            }

        </button>
    )
}


export default Button