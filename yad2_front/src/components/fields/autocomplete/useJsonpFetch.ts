import { useState, useEffect } from 'react';
import jsonp from 'jsonp';
import { JsonpFetchHook } from './types';
import { Val } from './types';

const useJsonpFetch = ({ url }: JsonpFetchHook) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<null | Val[]>(null);

    const extractData = (data: any) => {

        if (data.result && data.result.records) {


            // return data.result.records.map((record: any) => Object.values(record)[0]);
            return data.result.records as Val[];
        }
        else return null;
    };

    useEffect(() => {
        if (!url) return;
        console.log(url)
        const fetchData = () => {
            setIsLoading(true);
            setError(null);
            jsonp(url, (err, data) => {
                if (err) {
                    setError(err.message);
                    setIsLoading(false);
                } else {
                    setData(extractData(data));
                    setIsLoading(false);
                }
            });
        };

        fetchData();
    }, [url]);

    return { isLoading, error, data };
};

export default useJsonpFetch;




// ────────────────────────────────────────────────────────────────────────────────



