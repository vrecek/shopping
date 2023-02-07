import { ModuleClassname } from '@/interfaces/CommonInterfaces'


const LeftInformationsTextHeader = ({moduleClassname}: ModuleClassname) => {
    return (
        <section className={moduleClassname}>

            <h2>Who are we ?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        </section>
    )
}


export default LeftInformationsTextHeader