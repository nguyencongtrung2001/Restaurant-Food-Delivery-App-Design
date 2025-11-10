"use client";

import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div
      className="w-screen overflow-x-scroll text-orange-500 scroll-smooth snap-x snap-mandatory"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* WRAPPER */}
      <div className="w-max flex flex-row">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-orange-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] snap-center"
          >
            {/* IMAGE */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-60 transition-all duration-500">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
