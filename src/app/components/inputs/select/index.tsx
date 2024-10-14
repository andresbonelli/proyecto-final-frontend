import { ProductDto } from "@/utils/interfaces";

export default function ProductFormSelect({
  title,
  name,
  required,
  entries,
  formData,
  setFormData,
}: {
  title: string;
  name: string;
  entries: Object;
  required?: boolean;
  formData: ProductDto;
  setFormData: (data: ProductDto) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="product-category"
        className="w-full font-MontserratLight text-sm "
      >
        {title}:
      </label>
      <select
        required={required}
        name={name}
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
        {Object.entries(entries).map(([key, value]) => {
          return (
            <option aria-selected="true" key={key} value={value}>
              {key}
            </option>
          );
        })}
      </select>
    </div>
  );
}
