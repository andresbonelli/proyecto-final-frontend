"use client";

import { Categories, Sizes } from "@/utils/constants";
import { ProductDto, ProductFromDB } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import StringListInput from "../../../inputs/product/multi";
import ProductFormSelect from "../../../inputs/product/select";
import ProductFormInput from "../../../inputs/product/single";
import CheckboxInput from "../../../inputs/product/sizes";
import TagsInput from "../../../inputs/product/tags";
import ProductFormTextArea from "../../../inputs/product/textarea";
import Loader from "../../../loader";
import { editProduct, uploadProductImg } from "@/actions/admin";
import Image from "next/image";

export default function EditProductForm({
  product,
}: {
  product: ProductFromDB;
}) {
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
  const [message, setMessage] = useState("");
  const [hasDiscount, setHasDiscount] = useState(
    product.old_price ? true : false
  );
  const [hasDetails, setHasDetails] = useState(product.details !== null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    // Cleanup when the component unmounts or when the image file changes
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  async function handleUploadImg(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (imageFile) {
      const formData = new FormData();
      formData.append("file", imageFile);
      const result = await uploadProductImg(product.id, formData);
      if (result?.success) {
        window.location.reload();
      }
      setImageFile(null);
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
      console.log(previewUrl);
    } else {
      setImagePreview(null);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("pending");
    try {
      console.log(formData, "FORM DATA");
      const result = await editProduct(product.id, formData);
      if (result.success) {
        setStatus("success");
        setMessage("Se ha editado el producto");
        setFormData(result.success);
        window.location.reload();
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
    <div className="flex flex-col">
      <div className="flex flex-row justify-start items-end sm:w-2/3 px-8 mb-3 gap-3">
        {product.image && (
          <div className="flex flex-col justify-between gap-2">
            <p className="text-sm tracking-wide">Imagen de portada actual:</p>
            <Image
              src={product.image!}
              width={200}
              height={200}
              alt={product.name}
            />
          </div>
        )}
        {imagePreview && (
          <div className="flex flex-col justify-between gap-2">
            <p className="text-sm tracking-wide">Nueva imagen de portada:</p>

            <Image
              src={imagePreview}
              width={200}
              height={200}
              alt={product.name}
            />
          </div>
        )}
        <form
          onSubmit={handleUploadImg}
          className="flex flex-col gap-5 sm:flex-row sm:gap-0 justify-start items-center "
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className=" text-xs tracking-wide"
          />
          <button
            type="submit"
            className="bg-softBlue hover:bg-blue text-white py-2 px-4 rounded-md"
          >
            actualizar
          </button>
        </form>
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
            value={product.name}
            required
            formData={formData}
            setFormData={setFormData}
            setMessage={setMessage}
          />
          <ProductFormInput
            type="text"
            title="Descripción corta"
            name="description"
            value={product.description}
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
                value={product.price.toString()}
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
                  checked={hasDiscount}
                  onChange={() => setHasDiscount(!hasDiscount)}
                />
              </div>

              {hasDiscount && (
                <ProductFormInput
                  type="number"
                  title="Precio anterior"
                  name="old_price"
                  value={product.old_price?.toString()}
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
                value={product.category}
                formData={formData}
                setFormData={setFormData}
              />
              <ProductFormInput
                type="text"
                title="SKU"
                name="sku"
                width="w-56"
                value={product.sku ?? ""}
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
                value={product.stock.toString()}
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
            value={product.image ?? ""}
            formData={formData}
            setFormData={setFormData}
            setMessage={setMessage}
          />
          <TagsInput
            values={formData.tags ?? []}
            formData={formData}
            setFormData={setFormData}
          />
          <div className="flex flex-row w-fit h-full items-center gap-2">
            <label
              htmlFor="product-price"
              className="w-full font-MontserratLight text-sm "
            >
              Detalles extra:
            </label>
            <input
              type="checkbox"
              checked={hasDetails}
              onChange={() => setHasDetails(!hasDetails)}
            />
          </div>

          {hasDetails && (
            <>
              <ProductFormTextArea
                title="Descripción larga"
                name="long_description"
                value={product.details?.long_description ?? ""}
                formData={formData}
                setFormData={setFormData}
              />
              <CheckboxInput
                title="Talles disponibles"
                entries={Sizes}
                values={product.details?.sizes ?? []}
                formData={formData}
                setFormData={setFormData}
              />
              <StringListInput
                title="Imagenes adicionales"
                listName="image_list"
                values={product.details?.image_list ?? []}
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
          {status === "pending" ? <Loader /> : "Modificar producto"}
        </button>
      </form>
    </div>
  );
}
