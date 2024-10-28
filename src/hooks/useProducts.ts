"use server";

import { ProductFromDB, ProductQuery } from "../utils/interfaces";
import api from "../services/api";

export default async function useProducts(query: ProductQuery) {
  const { filter, limit, offset, sortBy, sortDir, projection } = query;

  const productQuery = `limit=${limit ?? "50"}&filter=${filter ?? ""}&offset=${
    offset ?? "0"
  }&sort_by=${sortBy ?? "created_at"}&sort_dir=${sortDir ?? "asc"}&projection=${
    projection ?? "details=0,sales_count=0"
  }`;

  const res = await api.get(`/api/products/?${productQuery}`);
  const products: ProductFromDB[] = await res.data["product_list"];
  const validationErrors: any[] = await res.data["errors"];

  return { products, validationErrors };
}
