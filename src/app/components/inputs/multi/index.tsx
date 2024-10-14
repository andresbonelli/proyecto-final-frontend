import { ProductDto } from "@/utils/interfaces";
import AddIcon from "../../icons/Add";
import { useState } from "react";

export default function StringListInput({
  title,
  listName,
  required,
  formData,
  setFormData,
}: {
  title: string;
  listName: string;
  required?: boolean;
  formData: ProductDto;
  setFormData: (data: ProductDto) => void;
}) {
  const [extraInput, setExtraInput] = useState("");
  const [inputList, setInputList] = useState<string[]>([]);
  function handleAddInput(img: string) {
    setInputList([...inputList, img]);
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        image_list: [...(formData.details?.image_list ?? []), img],
      },
    });
  }

  function handleDeleteInput(inputToDelete: string) {
    const updatedImages = inputList.filter((img) => img !== inputToDelete);
    setInputList(updatedImages);
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        [listName]: updatedImages,
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
      <div className="flex flex-row items-center gap-3">
        <input
          required={required}
          type="text"
          name={listName}
          onChange={(e) => setExtraInput(e.target.value)}
          className="w-full py-2 px-3 rounded-md border border-gray-300"
        />
        <button type="button" onClick={() => handleAddInput(extraInput)}>
          <AddIcon width={30} height={30} fill="blue" />
        </button>
      </div>
      {inputList.length > 0 && (
        <div className="w-full flex flex-col  gap-3">
          {inputList.map((image, index) => (
            <div
              key={index}
              className="w-full flex flex-row justify-between items-center gap-3"
            >
              <p>{image}</p>
              <button
                type="button"
                onClick={() => handleDeleteInput(image)}
                className="rotate-45"
              >
                <AddIcon width={30} height={30} fill="red" />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
