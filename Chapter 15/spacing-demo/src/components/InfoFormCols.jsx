import FormCols from "./FormCols"
import { Split } from "./InfoForm"

const InfoFormCols = () => {
    return (
        <Split fraction="1/3" gutter="xl">
            <div>
                <h3>General Information</h3>
                <span>
                    All the information you provided in this form will be available in 
                    public domain.
                </span>
            </div>
            <FormCols />
        </Split>
    )
}
export default InfoFormCols