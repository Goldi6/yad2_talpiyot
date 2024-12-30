import { useEffect, useRef, useState } from "react";
import { StyledAutocomplete } from "./Autocomplete.styled";
import { useAutocompleteFetch } from "./useAutocompleteFetch";
import AutocompleteList from "./AutocompleteList";
import { AutocompleteProps, FieldNameOptions, Val } from "./types";

const MIN_SEARCH_LENGTH = 1;



export default function Autocomplete({ Input, autocomplete, setSelected }: AutocompleteProps) {
    const [searchValue, setSearchValue] = useState<null | string>(null);

    const [inpValue, setInpValue] = useState('');

    const [results, setResults] = useState<object[]>([]);

    // const [isFocused, setIsFocused] = useState(false);

    const inpRef = useRef<HTMLInputElement>(null);



    // //MOVE TO HOOK: upper for all autocomplete components
    const { isLoading, data, error } = useAutocompleteFetch({ apiName: autocomplete, inpVal: searchValue });

    useEffect(() => {
        if (data) {
            console.log(data)
            setResults(() => data);
        }
    }, [data])

    useEffect(() => {

        if (inpValue.length > MIN_SEARCH_LENGTH) {
            console.log(inpValue)
            setSearchValue(() => inpValue);
        } else {
            setResults(() => []);
        }

    }, [inpValue])

    const handleClick = (val: Val) => {
        const keys = Object.keys(val);
        const fieldNameOptionsArray: FieldNameOptions[] = ["שם_ישוב", "שם_רחוב", "שם_שכונה", "שם_אזור", "מספר_בית"];

        let name = null;

        fieldNameOptionsArray.forEach((fieldNameOption: FieldNameOptions) => {
            if (keys.includes(fieldNameOption)) {
                name = fieldNameOption;
            }
        })

        if (!name) return null;

        const text = val[name];
        setInpValue(text);
        setSelected(val);
        setResults([]);
    }


    const InputComponent = <Input state={[inpValue, setInpValue]} inpRef={inpRef} />

    return (
        <>
            <StyledAutocomplete>
                {InputComponent}
                {document.activeElement === inpRef.current && <AutocompleteList inpVal={inpValue} results={results} handleClick={handleClick} />}
            </StyledAutocomplete>
        </>
    );
};

