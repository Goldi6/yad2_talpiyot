import { StyledAutocompleteItem, StyledAutocompleteListContainer } from "./Autocomplete.styled";
import { FieldNameOptions, ItemProps, ListProps, Val } from "./types";


const AutocompleteItem = ({ val, handleClick, inpVal }: ItemProps) => {
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
    const refactoredText = text.replace(new RegExp(inpVal, 'i'), `<b>${inpVal}</b>`);

    return (
        <li onClick={() => handleClick(val)}>
            <StyledAutocompleteItem>
                <span dangerouslySetInnerHTML={{ __html: refactoredText }}></span>
            </StyledAutocompleteItem>
        </li>
    )
}

//package component
export default function AutocompleteList({ handleClick, results, inpVal }: ListProps) {
    return (
        <>
            {results.length > 0 &&
                <StyledAutocompleteListContainer>
                    <ul>
                        {results.map((val: { [key: string]: any }, i) => <AutocompleteItem handleClick={handleClick} key={i} val={val as Val} inpVal={inpVal} />)}
                    </ul>
                </StyledAutocompleteListContainer>
            }
        </>
    );
};
