import { QueryInfoType } from '@/interfaces/SearchInterfaces'
import React from 'react'


const QueryInfo = ({query, isFound, cname}: QueryInfoType) => {
    return (
        <div className={cname}>

            <h1>
                {
                    isFound
                        ? <>Results for:</>
                        : <>No products found for:</>
                }
            </h1>

            <h2>{query}</h2>

        </div>
    )
}


export default QueryInfo