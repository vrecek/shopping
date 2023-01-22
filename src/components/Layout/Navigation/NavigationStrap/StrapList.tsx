import React from 'react'
import { Link } from 'react-router-dom'
import { LinkOptions } from '../../../../interfaces/CommonInterfaces'
import Icon from '../../../Common/Icon'


const StrapList = ({list}: {list: LinkOptions[]}) => {
    return (
        <ul>

            {
                list.map((x, i) => (
                    <li key={i}>
                        
                        <Link to={x.url}>

                            {x.text}
                            {
                                x.icon 
                                    && <Icon>{x.icon}</Icon>
                            }

                        </Link>

                    </li>
                ))
            }

        </ul>
    )
}


export default StrapList