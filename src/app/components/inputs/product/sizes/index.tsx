import { Sizes } from "@/utils/constants";
import { ProductDto } from "@/utils/interfaces";
import { useState } from "react";

export default function CheckboxInput({
  title,
  required,
  entries,
  values,
  formData,
  setFormData,
}: {
  title: string;
  required?: boolean;
  entries: Object;
  values?: string[];
  formData: ProductDto;
  setFormData: (data: ProductDto) => void;
}) {
  const [sizes, setSizes] = useState(values ?? []);
  function handleSizeChange(size: string, isChecked: boolean) {
    const sizes = isChecked
      ? [...(formData.details?.sizes ?? []), size] // Add size if checked
      : formData.details?.sizes?.filter((s) => s !== size); // Remove size if unchecked

    setSizes(sizes ?? []);
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        sizes,
      },
    });
  }

  return (
    <>
      <label
        htmlFor={entries.toString()}
        className="w-full font-MontserratLight text-sm "
      >
        {title}:
      </label>
      <div className="flex flex-row justify-start gap-5">
        <div className="flex flex-row justify-start items-center gap-5">
          {Object.entries(entries).map(([key, value]) => (
            <div
              key={value}
              className="flex flex-row justify-start items-center  gap-2"
            >
              <label className="font-MontserratLight ">{key}</label>
              <input
                required={required}
                type="checkbox"
                checked={sizes?.includes(value)}
                className="w-4 h-4"
                value={value}
                onChange={(e) => handleSizeChange(value, e.target.checked)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
