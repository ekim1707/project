import axios from "axios";
import { genericHeaders } from "../environment/resources";

export const basicHttpService = {
  getRequest: (url) =>
    axios
      .get(url, {
        genericHeaders,
      })
      .catch((err) => err),
  createRequest: (url, data) =>
    axios.post(url, data, {
      genericHeaders,
    }),
  updateRequest: (url, data) =>
    axios.patch(url, data, {
      genericHeaders,
    }),
  deleteRequest: (url) =>
    axios.delete(url, {
      genericHeaders,
    }),
};

export default basicHttpService;
