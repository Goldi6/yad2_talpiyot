// import useSWR from "swr";

// const getData = (page: number = 1): Promise<number> =>
//   new Promise((resolve) => setTimeout(resolve, 5000)).then(() => 0); // Simulate a 5-second delay

// const fetcher = (url: string) => getData(parseInt(url)); // Convert the URL to a number

// export default function useData(page: number) {
//   const { data, error } = useSWR(page.toString(), fetcher);

//   return {
//     data,
//     isLoading: !data && !error,
//     isError: error,
//   };
// }

import useSWR from "swr";

const getData = (page: number = 1): Promise<number> =>
  new Promise((resolve) => setTimeout(resolve, 5000)).then(() => 0); // Simulate a 5-second delay

const fetcher = (urlAndPage: [string, number]) => {
  const [url, page] = urlAndPage;
  return getData(page);
};

export default function useRealEstateData(page: number) {
  const { data, error } = useSWR(
    ["http://localhost:5000/api/real-estate/for-sale", page],
    fetcher
  );

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
