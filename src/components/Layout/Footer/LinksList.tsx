import {LinkOptions} from '@/interfaces/CommonInterfaces'
import Link from 'next/link'


const LinksList = ({list}: {list: LinkOptions[]}) => {
    return (
        <ul>

            {
                list.map((x, i) => (
                    <li key={i}>
                        <Link className={x.cname} href={x.url}>
                            {x.text}
                        </Link>
                    </li>
                ))
            }

        </ul>
    )
}


export default LinksList