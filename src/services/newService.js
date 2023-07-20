import basicHttpService from "./basicHttpService";
import { resources } from "../environment/resources";

const newServiceURL =
  resources.api.baseURL + resources.api.newService.baseEndpoint;

const newService = {
  getAll: () => basicHttpService.getRequest(newServiceURL),
  getById: (id) => basicHttpService.getRequest(`${newServiceURL}/${id}`),
  create: (data) => basicHttpService.createRequest(newServiceURL, data),
  update: (id, data) =>
    basicHttpService.updateRequest(`${newServiceURL}/${id}`, data),
  delete: (id) => basicHttpService.deleteRequest(`${newServiceURL}/${id}`),
};

export default newService;
