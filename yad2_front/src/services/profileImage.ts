import axios from "axios";
import { baseUrl } from "./fetcher";
import { errHandler } from "./errHandler";
import { mutate } from "swr";

const path = baseUrl + "/auth/user/profile_image";




export const patchUpdateProfileImage = async (
  //TODO: check for correct file type type
  file: File
) => {



  try {

    const getResponse = await axios.get(path, { withCredentials: true });
    const url = getResponse.data.url;

    console.log(file)
    // const putResponse = await axios.put(url, file, { headers: { "Content-Type": "image/*" } });
    await axios.put(url, file, { headers: { "Content-Type": "multipart/form-data" } });

    const imgUrl = url.split("?")[0];
    await axios.patch(path, { url: imgUrl }, { withCredentials: true });
    mutate('/auth/user');

  } catch (err) {
    console.log(err)
  }

};


export const deleteProfileImage = async () => {

  try {

    await axios.delete(path, { withCredentials: true });
    mutate('/auth/user');



  } catch (err) {
    console.log(err)
  }
};

//delete profile image