import axios from "./axios";

export const tempEndpoint = async (endpoint, data) => {
  let response = [false, { error: "Error" }];

  let reqPromise = axios
    .get(endpoint)
    .then((res) => {
      data.github = res.data;
      response = [true, res.data];
    })
    .catch((err) => {
      console.error(err);
      response = [false, err];
    });
  await Promise.all([reqPromise]);
  return response;
};

export const requester = async (configs, data) => {
  let requests = [];
  for (const element of configs) {
    const { endpoint, name } = element;
    data[name] = {};
    let request = axios
      .get(endpoint)
      .then((res) => {
        data[name] = res.data;
      })
      .catch((err) => {
        console.error(err);
        data[name].error = err;
      });

    requests.push(request);
  }
  return await Promise.all(requests);
};
