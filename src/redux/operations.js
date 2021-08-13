import axios from "axios";
import { getImagesRequest, getImagesSuccess, getImagesError } from "./action";

axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
  key: "22009349-fa1b997bd7745ba2d67ebd8f8",
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

export const getGalleryItems =
  (query = "", currentPage = 1) =>
  (dispatch) => {
    dispatch(getImagesRequest());
    axios
      .get("", {
        params: { q: query, page: currentPage },
      })
      .then((response) => {
        console.log(response.data.hits);
        dispatch(getImagesSuccess(response.data.hits));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getImagesError(error));
      });

    // dispatch(getImagesSuccess);
    // dispatch(getImagesError);
  };

// async function getFetch(query, page) {
//   const { data } = await axios
//     .get("", {
//       params: {
//         q: query,
//         page,
//       },
//     })
//     .catch(function (error) {
//       toast.error(error);
//     });
//   // console.log(data.hits);
//   return data.hits;
// }
