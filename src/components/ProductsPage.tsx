import React, { useState } from "react";
import { CardDetails } from "./CardDetails";
import type { ProductI } from "../interfaces/ProductsI";
import { useLocation } from "react-router-dom";
interface Filter {
  data: ProductI[];
}

export const ProductsPage: React.FC<Filter> = ({ data }) => {
  const location = useLocation();

  return (
    <div>
      <section className=" rounded-md text-center grid grid-rows-3 justify-center items-center h-[35vh]">
        <h1 className="font-bold text-5xl text-slate-900">
          Nueva Coleccion&nbsp;<span className="text-rose-600">Invierno</span>
        </h1>
        <p className="font-semibold text-slate-500 text-md">
          Descubre las nuevas tendecias en moda. Estilos unicos que refrejan tu
          personalidad.
        </p>
        <div className="flex w-1/2 mx-auto gap-x-4">
          <button className="bg-pink-700 text-white p-2 text-sm rounded-md font-semibold mx-auto w-1/2">
            Explorar Coleccion
          </button>
          <button className="text-sm font-semibold text-black bg-white mx-auto p-2 w-1/2 rounded-md shadow-sm">
            Ver Ofertas
          </button>
        </div>
      </section>

      <div className="text-center bg-white pt-8">
        <h1 className="font-bold text-3xl text-slate-900">
          Productos Destacados
        </h1>
        <p className="font-semibold text-slate-500 text-md mt-4">
          Los favoritos de nuestros clientes
        </p>
      </div>
      <section className="grid grid-cols-4 justify-items-center bg-white py-6">
        {data.map((element) => (
          <CardDetails
            category={element.category}
            id={element.id}
            image={element.image}
            name={element.name}
            price={element.price}
            key={element.id}
          />
        ))}
      </section>

      <section className="grid grid-rows-2 gap-5 bg-white text-center py-8">
        <h1 className="text-black text-3xl font-bold text-slate-900">
          {" "}
          Mantente al dia con las ultimas tendencias
        </h1>
        <p className="text-slate-500 font-semibold">
          Suscribete a nuestro newsletter y recibe ofertas exclusivas
        </p>
        <div className="w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Tu email"
            className="border p-2 rounded-md mx-4 w-1/3"
          />
          <button className="p-2 px-4 bg-rose-700 text-white font-semibold rounded-md cursor-pointer">
            Suscribirse
          </button>
        </div>
      </section>
    </div>
  );
};
