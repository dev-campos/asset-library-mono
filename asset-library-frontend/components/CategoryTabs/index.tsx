"use client";

import { useStore } from "@/store/useStore";
import type { Category } from "@/types/asset";

type CategoryFilter = Category | 'Featured';
const categories: CategoryFilter[] = ["Featured", "KPI", "Layout", "Storyboards"];

const CategoryTabs = () => {
  const selectedCategory = useStore((s) => s.selectedCategory);
  const setSelectedCategory = useStore((s) => s.setSelectedCategory);

  return (
    <div className="bg-gray-200 rounded p-1 w-full">
      <div className="flex justify-between w-full">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-xs tracking-widest uppercase py-1 rounded transition-colors w-full text-center ${isActive
                ? "bg-white text-black font-semibold"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
