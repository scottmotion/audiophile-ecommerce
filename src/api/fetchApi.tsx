const apiUrl = "src/data.json";

export async function fetchData() {
  let response = await fetch(apiUrl);
  let data = await response.json();
  return data;
}
