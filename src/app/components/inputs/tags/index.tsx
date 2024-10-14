import { ProductDto } from "@/utils/interfaces";
import { useState } from "react";

export default function TagsInput({
  formData,
  setFormData,
}: {
  formData: ProductDto;
  setFormData: (data: ProductDto) => void;
}) {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInputValue, setTagInputValue] = useState("");
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

  return (
    <>
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
    </>
  );
}
