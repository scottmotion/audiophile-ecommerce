const apiUrl = "src/data.json";

export async function fetchData() {
  let response = await fetch(apiUrl);
  let data = await response.json();
  return data;
}

// export async function fetchCategory(category: string) {
//   let response = await fetch(apiUrl);
//   let data = await response.json();
//   let newData: [] = [];
//   data.forEach((element: {}) => {
//     if (element.category == category) {
//       newData.push(element);
//     }
//   });
//   return newData;
// }
