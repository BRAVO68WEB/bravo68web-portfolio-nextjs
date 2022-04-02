import axios from "./axios";

export const tempEndpoint = async (endpoint, data) => {
  let response = [false, { error: "Error" }];

  var reqPromise = axios
    .get(endpoint)
    .then((res) => {
      data.github = res.data;
      response = [true, res.data];
    })
    .catch((err) => {
      console.log(err);
      response = [false, err];
    });
  await Promise.all([reqPromise]);
  return response;
};
