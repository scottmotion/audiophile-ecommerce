const apiUrl = "./data/data.json";
import { ProductData } from "../types/ProductType";

export async function fetchData() {
  let response = await fetch(apiUrl);
  let data: ProductData[] = await response.json();
  return data;
}

export async function fetchCategoryProducts(category: string) {
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

export async function fetchProductBySlug(slug: string) {
  let response = await fetch(apiUrl);
  let data: ProductData[] = await response.json();
  let productData: ProductData | undefined = data.find(
    element => element.slug == slug,
  );
  return productData;
}

export async function fetchProductById(id: number) {
  let response = await fetch(apiUrl);
  let data: ProductData[] = await response.json();
  let productData: ProductData | undefined = data.find(
    element => element.id == id,
  );
  return productData;
}

export async function fetchProductCategoryBySlug(slug: string) {
  let response = await fetch(apiUrl);
  let data: ProductData[] = await response.json();
  let productCategory: string | undefined = data.find(
    element => element.slug == slug,
  )?.category;
  // let productData: ProductData | undefined = data.find(
  //   element => element.id == id,
  // );
  return productCategory;
}
