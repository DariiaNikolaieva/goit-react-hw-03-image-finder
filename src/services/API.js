import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
  key: "22009349-fa1b997bd7745ba2d67ebd8f8",
  image_type: "photo",
  orientation: "horizontal",
  per_page: 12,
};

async function getFetch(query, page) {
  const { data } = await axios
    .get("", {
      params: {
        q: query,
        page,
      },
    })
    .catch(function (error) {
      toast.error(error);
    });
  // console.log(data.hits);
  return data.hits;
}

export default getFetch;
