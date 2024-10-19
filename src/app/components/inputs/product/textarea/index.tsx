import { ProductDto } from "@/utils/interfaces";
import { useState } from "react";

export default function ProductFormTextArea({
  title,
  name,
  value,
  formData,
  setFormData,
}: {
  title: string;
  name: string;
  value?: string;
  formData: ProductDto;
  setFormData: (data: ProductDto) => void;
}) {
  const [editValue, setEditValue] = useState<string>(value ?? "");
  return (
    <>
      <label htmlFor={name} className="w-full font-MontserratLight text-sm ">
        {title}:
      </label>
      <textarea
        name={name}
        value={editValue}
        onChange={(e) => {
          setEditValue(e.target.value);
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
    </>
  );
}
