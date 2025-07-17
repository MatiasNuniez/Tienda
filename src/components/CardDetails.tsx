import React from "react";

export const CardDetails = () => {
  return (
    <div className="grid grid-rows-[1fr_auto] max-w-sm bg-white shadow-lg rounded-md overflow-hidden h-96 mt-8">
      <div className="relative row-span-1">
        <img
          src="https://acdn-us.mitiendanube.com/stores/144/702/products/remera-hombre-microfribra-negra-frente1-610cb5cbd3ee068e2516364701229138-1024-1024.jpg"
          alt=""
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="grid grid-rows-[auto_auto_auto_1fr] gap-2 px-4">
        <span className="row-span-1 text-slate-500 font-bold text-xs">
          Category
        </span>
        <h1 className="row-span-1 text-black font-bold text-md">Title</h1>
        <h2 className="row-span-1 text-rose-600 font-bold">$999.9</h2>
        <button className="row-span-1 text-center bg-rose-600 p-2 rounded-md font-bold w-full text-white text-sm mb-4">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
