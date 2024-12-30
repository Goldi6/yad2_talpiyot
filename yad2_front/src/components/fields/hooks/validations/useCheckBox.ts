import { useState } from 'react';



interface CheckboxState {
    checked: boolean;
    err: null | string;
    validate: () => boolean;
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;

}

const useCheckbox = (initialValue: boolean): CheckboxState => {
    const [checked, setChecked] = useState(initialValue);
    const [err, setErr] = useState<null | string>(null);

    const validate = () => {

        if (checked === false) {
            setErr('יש לאשר את תנאי השימוש');
            return false;
        }

        setErr(null);
        return true;
    }



    return {
        checked, err, validate, setChecked
    };
};

export default useCheckbox;
