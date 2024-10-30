"use client";

import { ProductFromDB } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import { calculateDiscountPerc } from "@/utils";
import Link from "next/link";

type ProductSortCriteria = keyof ProductFromDB;

export default function AdminProductsTable({
  products,
}: {
  products: ProductFromDB[];
}) {
  const [sortCriteria, setSortCriteria] =
    useState<ProductSortCriteria>("created_at");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">(() => "desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  function handleSort(criteria: ProductSortCriteria) {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  }
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, products]);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortCriteria) {
      const aValue = a[sortCriteria] ?? 0; // Default to empty string if undefined
      const bValue = b[sortCriteria] ?? 0;
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
      } else if (
        sortCriteria === "created_at" ||
        sortCriteria === "modified_at"
      ) {
        const aDate = new Date(aValue as string);
        const bDate = new Date(bValue as string);
        return sortOrder === "asc"
          ? aDate.getTime() - bDate.getTime()
          : bDate.getTime() - aDate.getTime();
      } else if (sortCriteria === "old_price") {
        const aDiscount = calculateDiscountPerc(
          a.old_price as number,
          a.price as number
        );
        const bDiscount = calculateDiscountPerc(
          b.old_price as number,
          b.price as number
        );
        return sortOrder === "asc"
          ? aDiscount - bDiscount
          : bDiscount - aDiscount;
      } else {
        // Handle cases where types are not consistent or are null/undefined
        return 0; // Treat as equal
      }
    } else {
      return 0; // No sorting criteria
    }
  });

  return (
    <>
      <div className="flex flex-col justify-start p-8 gap-8">
        <h1 className="w-full text-left font-MontserratBold text-2xl ">
          Mis Productos
        </h1>
        <div className="flex flex-row justify-between items-center  ">
          <input
            type="text"
            placeholder="buscar..."
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-background border p-2 text-grey rounded-md"
          />
          <Link
            href="/dashboard/products/create_new"
            className="text-sm font-MontserratSemibold bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
          >
            Nuevo producto
          </Link>
        </div>
      </div>
      <div className="h-[700px] overflow-y-auto border-y">
        <table>
          <thead>
            <tr className="bg-background border-b text-xs text-gray-500 h-12">
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort("name")}
              >
                NOMBRE{" "}
                {sortCriteria === "name" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort("category")}
              >
                CATEGORIA{" "}
                {sortCriteria === "category" &&
                  (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th className="p-2">DESCRIPCION</th>
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort("price")}
              >
                PRECIO{" "}
                {sortCriteria === "price" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th className="p-2" onClick={() => handleSort("old_price")}>
                DESC.
                {sortCriteria === "old_price" &&
                  (sortOrder === "asc" ? "▲" : "▼")}
              </th>
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort("sku")}
              >
                SKU{" "}
                {sortCriteria === "sku" && (sortOrder === "asc" ? "▲" : "▼")}
              </th>

              <th
                className=" p-2 cursor-pointer"
                onClick={() => handleSort("stock")}
              >
                STOCK{" "}
                <span>
                  {sortCriteria === "stock" &&
                    (sortOrder === "asc" ? "▲" : "▼")}
                </span>
              </th>
              <th
                className="p-2 cursor-pointer"
                onClick={() => handleSort("sales_count")}
              >
                VENTAS{" "}
                <span>
                  {sortCriteria === "sales_count" &&
                    (sortOrder === "asc" ? "▲" : "▼")}
                </span>
              </th>

              <th className="p-2 ">ACCIONES</th>
            </tr>
          </thead>
          {sortedProducts && (
            <tbody>
              {sortedProducts.map((product) => {
                return (
                  <tr
                    key={product.id}
                    className="bg-white hover:bg-background border-y text-md"
                  >
                    <td className="p-4 font-MontserratSemibold">
                      {product.name}
                    </td>
                    <td className="p-4 font-MontserratSemibold">
                      {product.category ?? "—"}
                    </td>
                    <td className="p-4 text-gray-500">
                      {product.description ?? "Sin descripción"}
                    </td>
                    <td className="p-4 font-MontserratSemibold">
                      ${product.price}
                    </td>
                    <td className="p-4 font-MontserratSemibold">
                      {product.old_price
                        ? `${calculateDiscountPerc(
                            product.old_price,
                            product.price
                          )}%`
                        : "—"}
                    </td>
                    <td className="p-4">{product.sku ?? "—"}</td>
                    <td className="p-4">{product.stock}</td>
                    <td className="p-4">{product.sales_count ?? "—"}</td>
                    <td className="p-4 flex flex-row items-center gap-2">
                      <Link
                        href={`/dashboard/products/edit/${product.id}`}
                        className="text-sm font-MontserratSemibold bg-softBlue hover:bg-blue text-white p-2  rounded-md"
                      >
                        Editar
                      </Link>
                      <Link
                        href={`/dashboard/products/delete/${product.id}`}
                        className="text-sm font-MontserratSemibold bg-red hover:bg-redder text-white p-2 rounded-md"
                      >
                        Eliminar
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}
