import React from 'react'

type ButtonOptions = {
    text: string
    additional?: JSX.Element | string | number
    cname?: string
    action?: React.MouseEventHandler
    enter?: React.MouseEventHandler
    leave?: React.MouseEventHandler
}


const Button = ({text, additional, cname, action, enter, leave}: ButtonOptions) => {
    return (
        <button onMouseLeave={leave} onMouseEnter={enter} onClick={action} className={cname ?? ''}>

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