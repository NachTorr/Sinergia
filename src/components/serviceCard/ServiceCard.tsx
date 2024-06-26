import React from "react";
import Image from "next/image";
import { ServiceCardType } from "@/types/ServiceCardType";

const ServiceCard = ({ id, title, description, imgUrl }: ServiceCardType) => {
  return (
    <div className="group bg-[#eff3f6] border border-[#dcdde1] hover:bg-blue-200 hover:border-blue-300 w-[23rem] h-[30rem] shadow-lg flex flex-col text-center transition-all duration-300 relative overflow-hidden">
      <div className="h-[50%]">
        <Image
          className="h-full w-full object-cover"
          src={imgUrl}
          alt="Portada"
          width={700}
          height={700}
        />
      </div>
      <div className="flex flex-col items-center h-[50%] border-[#dcdde1] relative">
        <div className="bg-[#eff3f6] group-hover:bg-blue-200 rounded-full p-4 mt-[-2.5rem] transition-all duration-300">
          <Image
            src="https://somossinergia.com.ar/wp-content/uploads/2024/03/Logo-SINERGIA-SIN-Fondo-SOLO-LOGO-121x110.png"
            alt="Logo"
            width={64}
            height={64}
          />
        </div>
        <div className="flex flex-col items-center justify-around h-full relative w-full">
          <div className="font-bold">{title}</div>
          <div className="">
            <div className="group-hover:translate-y-0 transition-transform duration-300 pb-4 font-bold">
              VER MÁS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
