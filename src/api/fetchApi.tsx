const apiUrl = "../src/data.json";
import { ProductData } from "../types/ProductType";

export async function fetchData() {
  let response = await fetch(apiUrl);
  let data: ProductData[] = await response.json();
  return data;
}

export async function fetchCategory(category: string) {
  let response = await fetch(apiUrl);
  let data: ProductData[] = await response.json();
  let newData: ProductData[] = [];
  data.forEach((element: ProductData) => {
    if (element.category == category) {
      newData.push(element);
    }
  });
  return newData;
}

export async function fetchProduct(id: number) {
  let response = await fetch(apiUrl);
  let data: ProductData[] = await response.json();
  let productData: ProductData | undefined = data.find(
    element => element.id == id,
  );
  return productData;
}
