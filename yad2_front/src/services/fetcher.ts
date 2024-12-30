import axios from "axios";

interface Fetcher {
  (...args: Parameters<typeof axios.get>): Promise<any>; // Adjust 'any' if you have a specific response type
}

const fetcher: Fetcher = url =>
  axios.get(baseUrl + url, { withCredentials: true })
    .then(res => res.data)
    .catch(err => {
      console.log(err)
      if (err.response.status === 401) {
        return null;
      }
      return err;

    });

const baseUrl = "http://localhost:5000/api";

export { fetcher, baseUrl };
