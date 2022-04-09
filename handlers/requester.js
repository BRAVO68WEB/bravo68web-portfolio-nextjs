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
      console.error(err);
      response = [false, err];
    });
  await Promise.all([reqPromise]);
  return response;
};

export const requester = async (configs, data) => {
  let requests = [];
  for (let i = 0; i < configs.length; i++) {
    const { endpoint, name } = configs[i];
    // console.log(endpoint, name);
    data[name] = {};
    let request = axios
      .get(endpoint)
      .then((res) => {
        data[name].data = res.data;
      })
      .catch((err) => {
        console.error(err);
        data[name].error = err;
      });

    requests.push(request);
  }
  return await Promise.all(requests);
};
