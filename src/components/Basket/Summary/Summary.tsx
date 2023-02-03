import Button from '@/components/Common/Button'
import styles from '@/styles/Basket/Basket.module.scss'
import SummaryInfo from './SummaryInfo'


const Summary = () => {
    return (
        <aside className={ styles['basket-summary'] }>

            <h2>Summary</h2>

            <SummaryInfo what='Products price' value={'400 $'} />
            <SummaryInfo what='Delivery' value={'0 $'} />

            <SummaryInfo 
                cname={ styles['total'] }
                what='Total price' 
                value={'999 $'} 
            />

            <Button>Continue</Button>

        </aside>
    )
}


export default Summary