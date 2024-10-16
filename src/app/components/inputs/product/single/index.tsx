import { ProductDto } from "@/utils/interfaces";
import { useState } from "react";

export default function ProductFormInput({
  title,
  name,
  type,
  required,
  width,
  value,
  formData,
  setFormData,
  setMessage,
}: {
  title: string;
  name: string;
  type: string;
  required?: boolean;
  width?: string;
  value?: string;
  formData: ProductDto;
  setFormData: (data: ProductDto) => void;
  setMessage: (message: string) => void;
}) {
  const [editValue, setEditValue] = useState<string>(value ?? "");
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="w-full font-MontserratLight text-sm ">
        {title}:
      </label>
      <input
        required={required}
        type={type}
        min={type === "number" ? 0 : undefined}
        name={name}
        value={editValue}
        onChange={(e) => {
          setEditValue(e.target.value);
          setFormData({ ...formData, [e.target.name]: e.target.value });
          setMessage("");
        }}
        className={`${
          width ?? "w-full"
        } py-2 px-3 rounded-md border border-gray-300`}
      />
    </div>
  );
}
