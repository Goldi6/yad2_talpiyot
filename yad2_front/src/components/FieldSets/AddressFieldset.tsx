import { HouseNumberInputPersonal, StreetInputPersonal } from "../fields/StyledInputs/AutocompleteInputs";
import { CityAutocomplete } from "../fields/autocomplete/Index";
import { Val } from "../fields/autocomplete/types";



type Props = {
    cityState: [Val | null, React.Dispatch<React.SetStateAction<Val | null>>];
    streetState: [string, React.Dispatch<React.SetStateAction<string>>];
    houseNumberState: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function AddressFieldset({ cityState, streetState, houseNumberState }: Props) {



    return (
        <>
            <fieldset>
                <legend>כתובת</legend>
                <p>כדאי למלא את הכתובת, כדי שנוכל לחבר אותה אוטומטית בפעם הבאה שתפרסמו מודעה</p>
                <ul>
                    <CityAutocomplete setSelected={cityState[1]} />
                    <div id='street-address-input'>
                        <StreetInputPersonal state={streetState} />
                        <HouseNumberInputPersonal state={houseNumberState} />
                    </div>
                </ul>
            </fieldset>
        </>
    );
};
