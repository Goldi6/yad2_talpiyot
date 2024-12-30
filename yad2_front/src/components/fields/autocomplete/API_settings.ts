import { SearchOptions } from "./types";




const govApiUrl = "https://data.gov.il/api/3/action/datastore_search?";


export const getFieldName = (apiName: SearchOptions) => {
    switch (apiName) {
        case "cities": return "שם_ישוב";
        case "streets": return "שם_רחוב";
        case "neighborhoods": return "שם_שכונה";
        case "regions": return "שם_אזור";
        case "house_numbers": return "מספר_בית";
        default: return "";
    }
};

export const getAdditionalFieldNames = (apiName: SearchOptions) => {
    switch (apiName) {
        case "cities": return ["סמל_ישוב", "סמל_נפה", "שם_נפה"];
        default: return [];
    }
};

export const getApiId = (apiName: SearchOptions) => {
    switch (apiName) {
        case "cities": return "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba";
        case "streets": return "";
        case "neighborhoods": return "";
        case "regions": return "";
        case "house_numbers": return "";
        default: return "";
    }
};

export const getApiUrl = (apiName: SearchOptions) => {
    const fieldName = getFieldName(apiName);

    const params = new URLSearchParams({
        resource_id: getApiId(apiName),
        limit: "10",
        fields: fieldName + "," + getAdditionalFieldNames(apiName).join(","),
        sort: fieldName,

    });

    const getQuery = (inpVal: string) => {
        return `&q={"${fieldName}":"${inpVal}"}`;
    };


    return { baseUrl: govApiUrl + params.toString(), getQuery };
};
