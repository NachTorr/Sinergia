import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="w-screen bg-[#eff3f6] border border-[#dcdde1] text-black shadow-lg">
      <div className="container mx-auto flex items-center h-24">
        <a href="" className="flex items-center justify-center">
          <Image
            className="h-16"
            src="https://somossinergia.com.ar/wp-content/uploads/2024/03/Logo-SINERGIA-SIN-Fondo-SOLO-LOGO-121x110.png"
            alt="Logo"
            width={64}
            height={64}
          />
        </a>
        <div className="contents font-semibold text-base lg:text-lg">
          <div className="mx-auto flex items-center cursor-pointer">
            <div className="px-4 py-1 border-dotted border-r-2 border-black hover:text-blue-300 transition-all duration-300">
              <a href="/home">Inicio</a>
            </div>
            <div className="px-4 py-1 border-dotted active border-r-2 border-black hover:text-blue-300 transition-all duration-300">
              <a href="/servicios">Servicios</a>
            </div>
            <div className="px-4 py-1 hover:text-blue-300 transition-all duration-300">
              <a href="/contacto">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
