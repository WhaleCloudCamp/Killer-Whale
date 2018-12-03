import request from "utils/request";

export async function gPage(params) {
  return request("/page", {
    method: "POST",
    body: {
      ...params,
    },
  });
}
