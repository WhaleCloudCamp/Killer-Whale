import request from "utils/request";

export async function gPage(params) {
  return request("/api/page", {
    method: "POST",
    body: {
      ...params,
    },
  });
}
