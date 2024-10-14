import { ProductDto } from "@/utils/interfaces";

export default function ProductFormInput({
  title,
  name,
  type,
  required,
  width,
  formData,
  setFormData,
  setMessage,
}: {
  title: string;
  name: string;
  type: string;
  required?: boolean;
  width?: string;
  formData: ProductDto;
  setFormData: (data: ProductDto) => void;
  setMessage: (message: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="w-full font-MontserratLight text-sm ">
        {title}:
      </label>
      <input
        required={required}
        type={type}
        min={type === "number" ? "0" : undefined}
        name={name}
        onChange={(e) => {
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
