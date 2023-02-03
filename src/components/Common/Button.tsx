import React from 'react'

type ButtonOptions = {
    children: string
    additional?: JSX.Element | string | number
    cname?: string
    action?: React.MouseEventHandler
    enter?: React.MouseEventHandler
    leave?: React.MouseEventHandler
}


const Button = ({children, additional, cname, action, enter, leave}: ButtonOptions) => {
    return (
        <button onMouseLeave={leave} onMouseEnter={enter} onClick={action} className={cname ?? ''}>

            <label>
                {children}
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