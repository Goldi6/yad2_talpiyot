const objectsOnPage_promoted = 36;
const objectsOnPage_regular = 6;
const objectsOnPage_new = 6;

// const getData = async (page: number = 1) => {
//   await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a 2-second delay

//   return "null";
// };

const getData = (url: string, page: number = 1) =>
  new Promise((resolve) => setTimeout(resolve, 5000)).then(() => "null"); // Simulate a 2-second delay

export default getData;
