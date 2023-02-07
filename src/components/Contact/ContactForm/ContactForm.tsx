import Button from "@/components/Common/Button"
import InputDiv from "@/components/LogReg/InputDiv"


const ContactForm = () => {
    return (
        <form>

            <h3>Send us a message</h3>

            <InputDiv 
                label="Mail address"
                type="text"
            />

            <InputDiv 
                label="Your name"
                type="text"
            />

            <textarea spellCheck='false'></textarea>

            <Button>Send a message</Button>

        </form>
    )
}


export default ContactForm