"use client";

import { createProduct } from "@/actions/admin";
import Loader from "@/app/components/loader";
import { ProductDto } from "@/utils/interfaces";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { Categories } from "@/utils/constants";
import { set } from "zod";
import AddIcon from "@/app/components/icons/Add";

export default function CreateNewProduct() {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState<ProductDto>({
    name: "",
    description: "",
    price: 0,
    old_price: null,
    stock: 0,
  });
  const [message, setMessage] = useState("");
  const [hasDiscount, setHasDiscount] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [tagInputValue, setTagInputValue] = useState("");
  const [addDetails, setAddDetails] = useState(false);
  const [extraImageInput, setExtraImageInput] = useState("");
  const [imageList, setImageList] = useState<string[]>([]);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("pending");
    try {
      console.log("submit");
      console.log(formData, "FORM DATA");
      // const result = await createProduct(formData);
      // if (result.success) {
      //   setStatus("success");
      //   setMessage("Se ha creado el producto");
      //   setFormData(result.success);
      //   router.push("/dashboard/products");
      // }
    } catch (error) {
      setStatus("error");
      setMessage((error as Error).message);
    }
  }

  function handleTagInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setTagInputValue(value);

    // Detect comma and space
    if (value.endsWith(", ")) {
      const newTag = value.slice(0, -2).trim(); // Remove the comma and space
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setFormData({ ...formData, tags: [...tags, newTag] }); // Add new tag if not already present
      }
      setTagInputValue(""); // Clear input field
    }
  }

  function handleTagDelete(tagToDelete: string) {
    const updatedTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(updatedTags);
    setFormData({
      ...formData,
      tags: updatedTags,
    });
  }

  function handleSizeChange(size: string, isChecked: boolean) {
    setFormData((prevState) => {
      const sizes = isChecked
        ? [...(prevState.details?.sizes ?? []), size] // Add size if checked
        : prevState.details?.sizes?.filter((s) => s !== size); // Remove size if unchecked
      return {
        ...prevState,
        details: {
          ...prevState.details,
          sizes,
        },
      };
    });
  }
  function handleImageDelete(imgToDelete: string) {
    const updatedImages = imageList.filter((img) => img !== imgToDelete);
    setImageList(updatedImages);
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        image_list: updatedImages,
      },
    });
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
          <label
            htmlFor="product-name"
            className="w-full font-MontserratLight text-sm "
          >
            Nombre:
          </label>
          <input
            required
            type="text"
            name="name"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
              setMessage("");
            }}
            className="w-full py-2 px-3 rounded-md border border-gray-300 "
          />
          <label
            htmlFor="product-description"
            className="w-full font-MontserratLight text-sm "
          >
            Descripcion corta:
          </label>
          <input
            required
            type="text"
            name="description"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
              setMessage("");
            }}
            className="w-full py-2 px-3 rounded-md border border-gray-300 "
          />
          <div className="flex flex-row justify-between items-center gap-5">
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="product-price"
                  className="w-full font-MontserratLight text-sm "
                >
                  Precio (en AR$):
                </label>
                <input
                  required
                  type="number"
                  min="0"
                  name="price"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                    setMessage("");
                  }}
                  className="w-36 py-2 px-3 rounded-md border border-gray-300"
                />
              </div>
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
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="product-old-price"
                    className="w-full font-MontserratLight text-sm "
                  >
                    Precio anterior:
                  </label>
                  <input
                    required
                    type="number"
                    min="0"
                    name="old_price"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                      setMessage("");
                    }}
                    className="w-36 py-2 px-3 rounded-md border border-gray-300"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="product-category"
                  className="w-full font-MontserratLight text-sm "
                >
                  Categoría:
                </label>
                <select
                  required
                  name="category"
                  className="w-44 py-2 px-3 rounded-md border border-gray-300 "
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <option value="" disabled>
                    Seleccionar categoría
                  </option>
                  {Object.entries(Categories).map(([key, value]) => {
                    return (
                      <option aria-selected="true" key={key} value={value}>
                        {key}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="product-sku"
                  className="w-full font-MontserratLight text-sm "
                >
                  SKU:
                </label>
                <input
                  type="text"
                  name="sku"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                    setMessage("");
                  }}
                  className="w-56 py-2 px-3 rounded-md border border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="product-stock"
                  className="w-full font-MontserratLight text-sm "
                >
                  Stock:
                </label>
                <input
                  required
                  type="number"
                  min="0"
                  name="stock"
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                    setMessage("");
                  }}
                  className="w-24 py-2 px-3 rounded-md border border-gray-300"
                />
              </div>
            </div>
          </div>
          <label
            htmlFor="product-name"
            className="w-full font-MontserratLight text-sm "
          >
            Imagen de portada (URL):
          </label>
          <input
            type="text"
            name="image"
            onChange={(e) => {
              setFormData({ ...formData, [e.target.name]: e.target.value });
              setMessage("");
            }}
            className="w-full py-2 px-3 rounded-md border border-gray-300 "
          />
          <label
            htmlFor="product-tags"
            className="w-full font-MontserratLight text-sm "
          >
            Tags (Separados por coma):
          </label>
          <div className="w-full flex flex-row justify-start items-center px-3 rounded-md border border-gray-300">
            <div className="flex flex-row gap-2 ">
              {tags.map((tag) => (
                <p
                  key={tag}
                  className="bg-softBlue hover:bg-blue text-white text-nowrap text-sm font-MontserratSemibold py-1 px-3 rounded-full flex items-center "
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleTagDelete(tag)}
                    className="ml-2 text-red-200 hover:text-red-500"
                  >
                    &times;
                  </button>
                </p>
              ))}
            </div>
            <input
              type="text"
              value={tagInputValue}
              onChange={handleTagInputChange}
              className="w-full outline-none py-2 px-3 "
            />
          </div>
          <div className="flex flex-row w-fit h-full items-center gap-2">
            <label
              htmlFor="product-price"
              className="w-full font-MontserratLight text-sm "
            >
              Detalles extra:
            </label>
            <input
              type="checkbox"
              onChange={() => setAddDetails(!addDetails)}
            />
          </div>
          {addDetails && (
            <>
              <label
                htmlFor="product-long-description"
                className="w-full font-MontserratLight text-sm "
              >
                Descripción larga:
              </label>
              <textarea
                name="long_description"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    details: {
                      ...formData.details,
                      [e.target.name]: e.target.value,
                    },
                  });
                }}
                className="w-full py-2 px-3 rounded-md border border-gray-300 "
              />
              <label
                htmlFor="product-long-description"
                className="w-full font-MontserratLight text-sm "
              >
                Talles disponibles:
              </label>
              <div className="flex flex-row justify-start gap-5">
                <div className="flex flex-row justify-start items-center gap-5">
                  {["xxs", "xs", "sm", "md", "lg", "xl", "xxl", "xxxl"].map(
                    (size) => (
                      <div
                        key={size}
                        className="flex flex-row justify-start items-center  gap-2"
                      >
                        <label className="font-MontserratLight ">{size}</label>
                        <input
                          type="checkbox"
                          className="w-4 h-4"
                          value={size}
                          onChange={(e) =>
                            handleSizeChange(size, e.target.checked)
                          }
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </>
          )}
          <label
            htmlFor="product-long-description"
            className="w-full font-MontserratLight text-sm "
          >
            Agregar imágenes:
          </label>
          <div className="flex flex-row items-center gap-3">
            <input
              type="text"
              name="add-image"
              onChange={(e) => setExtraImageInput(e.target.value)}
              className="w-full py-2 px-3 rounded-md border border-gray-300"
            />
            <button
              type="button"
              onClick={() => setImageList([...imageList, extraImageInput])}
            >
              <AddIcon width={30} height={30} fill="blue" />
            </button>
          </div>
          {imageList.length > 0 && (
            <div className="w-full flex flex-col  gap-3">
              {imageList.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex flex-row justify-between items-center gap-3"
                >
                  <p>{image}</p>
                  <button
                    type="button"
                    onClick={() => handleImageDelete(image)}
                    className="rotate-45"
                  >
                    <AddIcon width={30} height={30} fill="red" />
                  </button>
                </div>
              ))}
            </div>
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
