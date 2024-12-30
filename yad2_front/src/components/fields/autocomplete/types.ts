import { NamedInputState } from "../Index";

export type SearchOptions = "cities" | "streets" | "neighborhoods" | "regions" | "house_numbers";

export type NamedAutocompleteProps = {
    setSelected: SetSelectedType;

};
export type FetchHookParams = {
    inpVal: string | null,
    apiName: SearchOptions,
}


export type JsonpFetchHook = { url: string | null }


export type SetSelectedType = React.Dispatch<React.SetStateAction<Val | null>>;
export type SetSelected = { setSelected: SetSelectedType };

//NOTE: the input comes from AutocompleteInputs and been set in the index for the Autocomplete folder
export type AutocompleteProps = {
    autocomplete: SearchOptions;
    Input: ({ state }: NamedInputState) => JSX.Element;

} & SetSelected;


export type BaseProps = {
    handleClick: (val: Val) => void;
    inpVal: string;
};

export type ListProps = {
    results: object[];
} & BaseProps;




export type Item = {
    שם_ישוב: string;
    שם_רחוב: string;
    שם_שכונה: string;
    שם_אזור: string;
    מספר_בית: string;

}


export type FieldNameOptions = "שם_ישוב" | "שם_רחוב" | "שם_שכונה" | "שם_אזור" | "מספר_בית";
export type FieldCodeOptions = "סמל_ישוב" | "סמל_רחוב" | "סמל_שכונה" | "סמל_אזור" | "סמל_בית";





export type Val = {
    [key in keyof FieldNameOptions]: string;
} & {
    [key: string]: string;
}


export type ItemProps = {
    val: Val;

} & BaseProps;
//segmented component