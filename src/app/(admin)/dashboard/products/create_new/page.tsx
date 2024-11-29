"use client";

import { createProduct } from "@/actions/admin";
import Loader from "@/app/components/loader";
import { ProductDto } from "@/utils/interfaces";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Categories, Sizes } from "@/utils/constants";
import ProductFormInput from "@/app/components/inputs/product/single";
import TagsInput from "@/app/components/inputs/product/tags";
import CheckboxInput from "@/app/components/inputs/product/sizes";
import ProductFormTextArea from "@/app/components/inputs/product/textarea";
import ProductFormSelect from "@/app/components/inputs/product/select";
import StringListInput from "@/app/components/inputs/product/multi";

export default function CreateNewProduct() {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState<ProductDto>({
    name: "",
    description: "",
    price: 0,
    old_price: null,
    category: Categories.INDUMENTARIA,
    stock: 0,
  });
  const [message, setMessage] = useState("");
  const [hasDiscount, setHasDiscount] = useState(false);
  const [hasDetails, setHasDetails] = useState(false);

  // TODO: Check for valid image URL with regex
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("pending");
    try {
      console.log(formData, "FORM DATA");
      const result = await createProduct(formData);
      if (result.success) {
        setStatus("success");
        setMessage("Se ha creado el producto");
        setFormData(result.success);
        router.push("/dashboard/products");
      } else {
        setStatus("error");
        setMessage(result.error);
      }
    } catch (error) {
      setStatus("error");
      setMessage((error as Error).message);
    }
  }

  return (
    <div className="flex flex-col justify-start bg-white">
      <div className=" flex flex-col justify-start p-8 gap-8">
        <h1 className="w-full text-left font-MontserratBold text-2xl ">
          Crear Producto
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" flex flex-col justify-start px-8 pb-8 gap-8 sm:w-2/3"
      >
        {message && (
          <p
            className={`text text-${
              status === "success" ? "green" : "red"
            } text-center py-2`}
          >
            {message}
          </p>
        )}
        <div className="flex flex-col gap-2">
          <ProductFormInput
            type="text"
            title="Nombre"
            name="name"
            required
            formData={formData}
            setFormData={setFormData}
            setMessage={setMessage}
          />
          <ProductFormInput
            type="text"
            title="Descripción corta"
            name="description"
            required
            formData={formData}
            setFormData={setFormData}
            setMessage={setMessage}
          />
          <div className="flex flex-row justify-between items-center gap-5">
            <div className="flex flex-row gap-5">
              <ProductFormInput
                required
                type="number"
                title="Precio"
                name="price"
                width="w-36"
                formData={formData}
                setFormData={setFormData}
                setMessage={setMessage}
              />
              <div className="flex flex-row h-full items-center gap-2">
                <label
                  htmlFor="product-has-discount"
                  className="w-full font-MontserratLight text-sm "
                >
                  ¿Oferta?
                </label>

                <input
                  type="checkbox"
                  onChange={() => setHasDiscount(!hasDiscount)}
                />
              </div>
              {hasDiscount && (
                <ProductFormInput
                  type="number"
                  title="Precio anterior"
                  name="old_price"
                  width="w-36"
                  formData={formData}
                  setFormData={setFormData}
                  setMessage={setMessage}
                />
              )}
            </div>
            <div className="flex flex-row gap-5">
              <ProductFormSelect
                title="Categoría"
                name="category"
                entries={Categories}
                formData={formData}
                setFormData={setFormData}
              />
              <ProductFormInput
                type="text"
                title="SKU"
                name="sku"
                width="w-56"
                formData={formData}
                setFormData={setFormData}
                setMessage={setMessage}
              />
              <ProductFormInput
                required
                type="number"
                title="Stock"
                name="stock"
                width="w-28"
                formData={formData}
                setFormData={setFormData}
                setMessage={setMessage}
              />
            </div>
          </div>
          <ProductFormInput
            type="text"
            title="Imagen de portada (URL)"
            name="image"
            formData={formData}
            setFormData={setFormData}
            setMessage={setMessage}
          />
          <TagsInput formData={formData} setFormData={setFormData} />
          <div className="flex flex-row w-fit h-full items-center gap-2">
            <label
              htmlFor="product-price"
              className="w-full font-MontserratLight text-sm "
            >
              Detalles extra:
            </label>
            <input
              type="checkbox"
              onChange={() => setHasDetails(!hasDetails)}
            />
          </div>
          {hasDetails && (
            <>
              <ProductFormTextArea
                title="Descripción larga"
                name="long_description"
                formData={formData}
                setFormData={setFormData}
              />
              <CheckboxInput
                title="Talles disponibles"
                entries={Sizes}
                formData={formData}
                setFormData={setFormData}
              />
              <StringListInput
                title="Imagenes adicionales"
                listName="image_list"
                formData={formData}
                setFormData={setFormData}
              />
            </>
          )}
        </div>
        <button
          disabled={status === "pending"}
          type="submit"
          className="w-56 bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
        >
          {status === "pending" ? <Loader /> : "Crear producto"}
        </button>
      </form>
    </div>
  );
}
