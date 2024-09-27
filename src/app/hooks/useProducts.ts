import { useEffect, useState } from "react";
import { ProductFromDB, ProductQuery } from "../utils/interfaces";
import api from "../services/api";

export default function useProducts(query: ProductQuery) {
  const [products, setProducts] = useState<ProductFromDB[]>([]);
  const [validationErrors, setValidationErrors] = useState([]);
  const [status, setStatus] = useState("loading");
  const [errorMsg, setErrorMsg] = useState("");
  const { filter, limit, offset, sortBy, sortDir, projection } = query;

  const productQuery = `limit=${limit ?? "50"}&filter=${filter ?? ""}&offset=${
    offset ?? "0"
  }&sort_by=${sortBy ?? "created_at"}&sort_dir=${sortDir ?? "asc"}&projection=${
    projection ?? "details=0,sales_count=0"
  }`;

  async function refetch() {
    try {
      setStatus("loading");
      await api
        .get(`/api/products/?${productQuery}`)
        .then((res) => {
          if (res.status === 200) {
            setStatus("success");
            console.log(res.data);
            setProducts(res.data["product_list"]);
            setValidationErrors(res.data["errors"]);
          }
        })
        .catch(function (error) {
          setStatus("error");
          alert(error);
          if (error.response) {
            setErrorMsg(error.response.data);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error);
          }
          console.log(error.config);
        });
    } catch (error) {
      alert(error);
      setStatus("error");
      setErrorMsg("unexpected error");
    }
  }
  console.log(status);
  console.log(products);

  useEffect(() => {
    refetch();
  }, []);

  return { products, validationErrors, status, errorMsg, refetch };
}
