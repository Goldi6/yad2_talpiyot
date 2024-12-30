import { CityInputPersonal } from "../StyledInputs/AutocompleteInputs";
import Autocomplete from "./Autocomplete";
import { NamedAutocompleteProps, SearchOptions } from "./types";

export const CityAutocomplete = ({ setSelected }: NamedAutocompleteProps) => {


    const props = {
        autocomplete: "cities" as SearchOptions,
        setSelected,
        Input: CityInputPersonal
    }


    return < Autocomplete {...props} />;

};





// export const StreetAutocomplete = (setState: Props) => {

//     return <Autocomplete autocomplete={"streets"} />;

// };
// export const HouseNumberAutocomplete = (setState: Props) => {
//     return <Autocomplete autocomplete={"house_numbers"} />;

// };


