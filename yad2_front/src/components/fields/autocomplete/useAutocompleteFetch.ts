import { useEffect, useMemo, useState } from "react";
import { getApiUrl } from "./API_settings";
import useJsonpFetch from "./useJsonpFetch";
import { FetchHookParams } from "./types";


export const useAutocompleteFetch = ({ inpVal, apiName }: FetchHookParams) => {


    const { baseUrl, getQuery } = useMemo(() => getApiUrl(apiName), [apiName]);


    const [apiUrl, setApiUrl] = useState<null | string>(null);

    // {"שם_ישוב": {"$like": "כפר סבא%"}}
    useEffect(() => {
        if (!inpVal) return;

        const url = baseUrl + getQuery(inpVal);
        // const url = baseUrl
        console.log(url)
        setApiUrl(() => url);

    }, [inpVal, baseUrl]);


    return useJsonpFetch({ url: apiUrl });
};




