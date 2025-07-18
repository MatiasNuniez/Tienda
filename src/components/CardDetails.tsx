import React from "react";
import type { ProductI } from "../interfaces/ProductsI";

export const CardDetails: React.FC<ProductI> = ({
  category,
  image,
  price,
  name,
  id,
}) => {
  return (
    <div
      className="grid grid-rows-[1fr_auto] min-w-sm bg-white shadow-lg rounded-md overflow-hidden h-96 mt-8"
      key={id}
    >
      <div className="relative row-span-1">
        <img src={image} alt={name} className="w-full h-60 object-cover" />
      </div>
      <div className="grid grid-rows-[auto_auto_auto_1fr] gap-2 px-4">
        <span className="row-span-1 text-slate-500 font-bold text-xs truncate">
          {category}
        </span>
        <h1 className="row-span-1 text-black font-bold text-md truncate">
          {name}
        </h1>
        <h2 className="row-span-1 text-rose-600 font-bold truncate">
          ${price}
        </h2>
        <button className="row-span-1 text-center bg-rose-600 p-2 rounded-md font-bold w-full text-white text-sm mb-4 cursor-pointer">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
