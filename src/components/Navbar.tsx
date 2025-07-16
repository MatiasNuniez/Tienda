import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white shadow-md p-6 rounded-xs">
        <div className="container grid grid-cols-[1fr_1fr_1fr] text-slate-400 font-semibold text-md">
          <li className="flex col-span-1">
            <ul className="mr-4">Shop</ul>
          </li>
          <li className="flex gap-4 col-span-1  place-content-center">
            <ul>Mujer</ul>
            <ul>Hombre</ul>
            <ul>Ninos</ul>
            <ul>Ofertas</ul>
          </li>
          <li className="flex gap-4 col-span-1  place-content-end">
            <ul>Mujer</ul>
            <ul>Hombre</ul>
            <ul>Ninos</ul>
            <ul>Ofertas</ul>
            <ul>Ofertas</ul>
            <ul>Ofertas</ul>
          </li>
        </div>
      </nav>
    </>
  );
};
