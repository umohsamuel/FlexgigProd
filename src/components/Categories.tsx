import React, { useState } from "react";
import CategoriesArr from "./categoriesArr";

const Categories = () => {


  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  };

  console.log("====>", selectedCategory);
  
  // Now we can do if selectedCategory == 1 ? navigate to freelancer : navigate to client here 

  return (
    <div>
      {CategoriesArr.map((category, index) => (
        <div
          key={index}
          className="flex gap-3 border-[3px] mb-4 rounded-xl p-2 items-center relative w-full"
        >
          {category.img ? (
            <div className="max-w-[50px] max-h-[50px] flex justify-center items-center p-1 h-[50px] min-w-[50px]">
              <img src={category.img} alt="" className="w-[50px]" />
            </div>
          ) : (
            <div className="max-w-[50px] max-h-[50px] flex justify-center items-center p-1 h-[40px] min-w-[40px] rounded-full bg-[#CDD4E5]"></div>
          )}
          <div className="w-full">
            <h2 className="text-base font-medium">{category.heading}</h2>
            <p className="text-[13px] md:text-sm">{category.description}</p>
          </div>
          {index === CategoriesArr.length - 1 && (
            <div className="absolute inset-0 bg-[#CACFDC] opacity-50 "></div>
          )}

          <input
            type="radio"
            value={category.id}
            checked={selectedCategory === category.id}
            onChange={handleCategoryChange}
            className="rounded-full self-start mt-2"
          />
        </div>
      ))}
    </div>
  );
};

export default Categories;
