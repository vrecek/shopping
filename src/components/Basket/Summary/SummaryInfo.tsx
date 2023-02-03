import { KeyValue } from "@/interfaces/CommonInterfaces"

const SummaryInfo = ({value, what, cname}: KeyValue) => {
    return (
        <div className={cname}>

            <p>{what}</p>
            <p>{value}</p>

        </div>
    )
}


export default SummaryInfo