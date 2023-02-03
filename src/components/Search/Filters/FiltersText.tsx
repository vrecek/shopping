import Button from "@/components/Common/Button"
import { ModuleClassname } from "@/interfaces/CommonInterfaces"

const FiltersText = ({moduleClassname}: ModuleClassname) => {
    return (
        <div className={moduleClassname}>

            <h3>Filters</h3>

            <Button>Apply</Button>

        </div>
    )
}

export default FiltersText