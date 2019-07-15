import axios from 'axios';

// wrapper around axios API call that formats erros
export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method.toLowerCase()](path, data)
      .then(res => {
        // console.log("API success");
        return resolve(res.data);
      })
      .catch(err => {
        return reject(err.response.data.error);
      })
  })
};