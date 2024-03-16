import Image from "next/image";

function Navbar() {
  return (
    <div className="pt-[17.81px] pb-[19.29px] bg-[#211A1D]">
      <div className="container flex gap-[84px] items-center">
        <div className="flex gap-[40px] items-center">
          <Image
            src={"/cite-logo.svg"}
            alt="Cite-logo"
            width={90}
            height={50.89}
          />
          <ul className="flex gap-[20px] items-center">
            <li className="text-[#FFDF42] font-extralight text-[px] leading-[18.75px]">
              Квартиры
            </li>
            <li className="text-[#F0F0F0] font-extralight text-[16px] leading-[18.75px]">
              Коттеджи
            </li>
            <li className="text-[#F0F0F0] font-extralight text-[16px] leading-[18.75px]">
              Аренда авто
            </li>
            <li className="text-[#F0F0F0] font-extralight text-[16px] leading-[18.75px]">
              Блог
            </li>
            <li className="text-[#F0F0F0] font-extralight text-[16px] leading-[18.75px]">
              Контакты
            </li>
          </ul>
        </div>
        <div className="flex gap-[47px]">
          <div className="flex gap-[12px]">
            <button className="w-[180px] py-[7px] rounded-[40px] border-[0.1px] border-[#fff] text-[14px] leading-[24px] text-[#fff]">
              Заявка на подбор
            </button>
            <div>
              <p className="text-[#FFDF42] text-[14px] underline mb-[1px]">
                +375 (29) 899-98-89
              </p>
              <div className="flex gap-[10px]">
                <Image
                  src={"/phone.svg"}
                  alt="web-svg"
                  width={20}
                  height={20}
                />
                <Image
                  src={"/whats-up.svg"}
                  alt="web-svg"
                  width={20}
                  height={20}
                />
                <Image
                  src={"/telegram.svg"}
                  alt="web-svg"
                  width={20}
                  height={20}
                />
                <Image
                  src={"/email.svg"}
                  alt="web-svg"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-[170px] flex gap-[13px] text-center py-[6px] border-[0.8px] border-[#FFDF42] rounded-[60px] pl-[7px] pr-[25px]">
            <Image src={"/plus.svg"} alt="bnt-plus" width={34} height={34} />
            <h5 className="text-[#FFDF42] text-[16px] leading-[18.75px]">
              Добавить объявление
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
