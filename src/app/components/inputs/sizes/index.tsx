import { Sizes } from "@/utils/constants";
import { ProductDto } from "@/utils/interfaces";

export default function CheckboxInput({
  title,
  required,
  entries,
  formData,
  setFormData,
}: {
  title: string;
  required?: boolean;
  entries: Object;
  formData: ProductDto;
  setFormData: (data: ProductDto) => void;
}) {
  function handleSizeChange(size: string, isChecked: boolean) {
    const sizes = isChecked
      ? [...(formData.details?.sizes ?? []), size] // Add size if checked
      : formData.details?.sizes?.filter((s) => s !== size); // Remove size if unchecked
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
        htmlFor="product-long-description"
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
