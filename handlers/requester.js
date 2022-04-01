import axios from "./axios";

export const tempEndpoint = (endpoint) => {
  let response = [false, { error: "Error" }];
  var reqPromise = axios
    .get(endpoint)
    .then((res) => {
      console.log(res.data);
      response = [true, res.data];
    })
    .catch((err) => {
      console.log(err);
      response = [false, err];
    });
  Promise.all(reqPromise).then(() => {
    return response;
  });
};
