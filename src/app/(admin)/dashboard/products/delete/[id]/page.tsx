import DeleteProductForm from "@/app/components/admin/forms/delete_product_form";
import api from "@/services/api";
import { ProductFromDB } from "@/utils/interfaces";
import Image from "next/image";

export default async function EditProductPage({
  params,
}: {
  params: { id: string };
}) {
  const response = await api.get(`/api/products/${params.id}`);
  const product: ProductFromDB = await response.data;

  return (
    <div className="flex flex-col justify-start bg-white">
      <div className=" flex flex-col justify-start p-8 gap-8">
        <h1 className="w-full text-left font-MontserratBold text-2xl ">
          Eliminar Producto
        </h1>
        <h3 className="w-full text-left font-MontserratBold text-lg">
          ¿Borrar <span className="text-blue">{product.name}</span> de la base
          de datos?
        </h3>
        <p className="w-full text-left font-MontserratLight">
          <i>(No se podra revertir esta operación!)</i>
        </p>
        <Image
          src={product.image ?? ""}
          height={300}
          width={300}
          className="object-scale-down h-full"
          alt={product.name}
        />
        <DeleteProductForm productID={product.id} />
      </div>
    </div>
  );
}
