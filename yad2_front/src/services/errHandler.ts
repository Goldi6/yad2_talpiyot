import axios, { AxiosError } from "axios";
import { setError } from "../module/messages/errors";


export function errHandler(error: AxiosError | Error) {
    if (axios.isAxiosError(error)) {
        // Access to config, request, and response
        if (error.response) {
            // The request was made, but the server responded with a status code outside of the 2xx range

            // The request was made, but the server responded with a status code outside of the 2xx range
            const err = error.response.data.error;
            console.error("FETCH_ERR_MSG:", err);
            if (err.message.includes('ECONNREFUSED')) {
                throw setError('ERR_NETWORK');
            }
            // const message = err?.message ?? 'Unknown error';
            // const name = err?.name ?? 'Unknown error';
            // const newErr = new Error(message);
            // newErr.name = name;
            throw err;



            // console.log("Status:", error.response.status);
            // console.log("Data:", error.response.data); // This contains the response body from the server
            // console.log("Headers:", error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            console.warn("No Response Error:", error.message);
            if (error.code === "ERR_NETWORK") {
                throw setError(error.code);
            }
            console.warn("Error", error);
            console.warn("Code:", error.code);
            console.warn("Req:", error.request);
            throw error.code;
        } else {

            // Something happened in setting up the request that triggered an error

            // This might occur in extremely rare situations where there's an issue in both making the request (thus no error.request) 
            // and receiving a response (thus no error.response). 
            // These scenarios could involve extremely low-level issues like browser environment problems or network breakdowns.
            console.log("Error Message - no response, no request:", error.message);
            console.warn("Config:", error.config); // This contains the request configuration
            throw error.code;
        }


    } else {
        // Just a stock error
        console.warn("STOCK Error:", error.message);
        throw error;
    }
}