import Image from "next/image";
import React from "react";
import BigInput from "./BigInput";

function NavMain() {
  return (
    <div className='bg-[url("/nav-bg.png")] bg-cover pt-[61px] pb-[32px] text-white mb-[62px]'>
      <div className="container">
        <div className="flex justify-between items-center mb-[21px]">
          <div className="flex gap-[30px] items-center">
            <h1 className="text-[30px]">Поиск квартир</h1>
            <p className="text-[20px] flex gap-[3px]">
              на <span className="text-[#FFDF42]">сутки</span>
              <Image
                src={"/bottom.svg"}
                alt="bottom.svg"
                width={12}
                height={6}
              />
            </p>
          </div>
          <div className="flex gap-[67px] items-center">
            <section className="flex gap-[6px] items-center">
              <Image
                src={"/calendar.svg"}
                alt="calendar"
                width={18}
                height={20}
              />
              <p>Выбрать даты</p>
            </section>
            <section className="flex gap-[6px] items-center">
              <Image src={"/loc.svg"} alt="Location" width={14} height={20} />
              <p className="font-extralight opacity-100">
                Ваш регион <span className="underline text-white">Минск</span>
              </p>
            </section>
          </div>
        </div>
        <BigInput />
        <div className="ml-[26px] mb-[70px] list-none flex items-center gap-[60px]">
          <li className="text-[#fff] flex gap-[5px] ">
            <span className="text-[#FFDF42]">+</span>Район
          </li>
          <li className="text-[#fff] flex gap-[5px]">
            <span className="text-[#FFDF42]">+</span>Улица
          </li>
          <li className="text-[#fff] flex gap-[5px]">
            <span className="text-[#FFDF42]">+</span>Метро
          </li>
          <li className="text-[#fff] flex gap-[5px]">
            <span className="text-[#FFDF42]">+</span>Удобства
          </li>
          <li className="text-[#fff] flex gap-[5px]">
            <span className="text-[#FFDF42]">+</span>Спальные места
          </li>
        </div>
        <p className="text-[18px] text-center">
          Найдено результатов: <span className="text-[#FFDF42]">285</span>
        </p>
      </div>
    </div>
  );
}

export default NavMain;
