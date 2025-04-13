"use client";

import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { cn } from "@/lib/utils";
import { TbBook, TbBulb, TbColorSwatch, TbHome, TbLeaf, TbSun } from "react-icons/tb";

const categories = [
  { name: "All", icon: TbBook },
  { name: "Trends", icon: TbColorSwatch },
  { name: "Tips & Tricks", icon: TbBulb },
  { name: "Psychology", icon: TbSun },
  { name: "Sustainability", icon: TbLeaf },
  { name: "Style", icon: TbHome },
];

export const BlogCategoryDock = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex justify-center w-full my-8">
      <Dock iconSize={40} iconMagnification={60} iconDistance={140} direction="middle">
        {categories.map((category) => (
          <DockIcon
            key={category.name}
            className={cn(
              "flex flex-col items-center justify-center cursor-pointer rounded-full",
              activeCategory === category.name
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-neutral-100 text-black hover:bg-neutral-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
            )}
            onClick={() => onCategoryChange(category.name)}
          >
            <category.icon className="size-5" />
            <span className="text-[10px] mt-1 font-medium">{category.name}</span>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
};
