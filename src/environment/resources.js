export const resources = {
  api: {
    baseURL: "/",
    newService: {
      baseEndpoint: "/",
      // additionalEndpoint: "/additional"
    },
  },
  paths: {
    basePath: "/",
  },
};

export const genericHeaders = () => ({
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
});

export const authHeaders = () => ({
  ...genericHeaders(),
  "x-access-token": localStorage.getItem("x-access-token"),
});

export const formDataHeader = (hasToken = true) => ({
  "Content-Type": "multipart/form-data",
  ...(hasToken && { "x-access-token": localStorage.getItem("x-access-token") }),
});
