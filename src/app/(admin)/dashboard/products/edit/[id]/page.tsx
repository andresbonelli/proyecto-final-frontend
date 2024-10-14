import EditProductForm from "@/app/components/forms/edit_product";
import api from "@/services/api";
import { ProductFromDB } from "@/utils/interfaces";

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
          Editar Producto
        </h1>
      </div>
      <EditProductForm product={product} />
    </div>
  );
}
