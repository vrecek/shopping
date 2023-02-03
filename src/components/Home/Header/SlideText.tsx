import { SlideTextType } from "@/interfaces/HomeInterfaces"
import Button from '@/components/Common/Button'
import { useRouter } from "next/router"
import styles from '@/styles/Home/Header.module.scss'


const SlideText = ({header, para, buttonText, buttonUrl}: SlideTextType) => {
    const redirect = useRouter().push


    return (
        <section>

            <p className={ styles['slide-header'] }>{header}</p>
            <p className={ styles['slide-description'] }>{para}</p>
            <Button 
                action={() => redirect(buttonUrl)} 
            >
                {buttonText}
            </Button>

        </section>
    )
}

export default SlideText