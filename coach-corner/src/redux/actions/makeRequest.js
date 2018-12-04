// @flow

import axios from "axios";

function makeRequest(request: {
  url: string,
  method?: "get" | "GET" | "post" | "POST",
  data?: Object,
  params?: Object,
  auth?: { username: string, password: string },
}) {
  const { url, data, params, auth } = request;
  const method = request.method || "get";

  return axios({
    method: method,
    url: url,
    data,
    params,
    auth,
  });
}
export default makeRequest;
