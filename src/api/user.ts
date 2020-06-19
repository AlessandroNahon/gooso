export async function fetchCurrentUser(id: number | string) {
  let response = await fetch(`/api/users/${id}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  let user = await response.json();

  return user;
}
