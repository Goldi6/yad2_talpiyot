import Checkbox from "./Checkbox/Checkbox";
import dict from "../../../pages/Auth/dictionary/dictionary";
import { TermsLink } from "../../links";


type Props = {
    checked: boolean;

    setChecked: React.Dispatch<React.SetStateAction<boolean>>;

    errMsg?: string | null;

}

const UpdatesCheckBox = (props: Props) => {
    return <Checkbox errMsg={null} name={"get-updates"} {...props} >


        {dict.checkBox.updates}

    </Checkbox>
};


const TermsCheckBox = (props: Props) => {
    return <Checkbox errMsg={props?.errMsg || null} name={"accept-terms"} {...props} >




        <TermsLink />



    </Checkbox>
};



export { UpdatesCheckBox, TermsCheckBox };