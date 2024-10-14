import { ProductDto } from "@/utils/interfaces";

export default function ProductFormTextArea({
  title,
  name,
  required,
  formData,
  setFormData,
  setMessage,
}: {
  title: string;
  name: string;
  required?: boolean;
  formData: ProductDto;
  setFormData: (data: ProductDto) => void;
  setMessage: (message: string) => void;
}) {
  return (
    <>
      <label htmlFor={name} className="w-full font-MontserratLight text-sm ">
        {title}:
      </label>
      <textarea
        name={name}
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
    </>
  );
}
