"use client";

import { ProductDto, ProductFromDB } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditProductForm({
  product,
}: {
  product: ProductFromDB;
}) {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState<ProductDto>({
    name: product.name,
    description: product.description,
    price: product.price,
    old_price: product.old_price ?? 0,
    stock: product.stock,
    sku: product.sku ?? "",
    image: product.image ?? "",
    category: product.category ?? "",
    details: product.details ?? null,
    tags: product.tags ?? [],
  });

  return <form action=""></form>;
}
