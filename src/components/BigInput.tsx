import Image from "next/image";

function BigInput() {
  return (
    <div className="w-full  rounded-[60px] flex bg-white pl-[26px] mb-[12px]">
      <div className="py-[19px]">
        <div className="flex gap-[24px] items-center">
          <h3 className="text-[#458BD1] text-[20px]">Цена:</h3>
          <p className="text-[16px] text-[#211A1D]">0 — 1500</p>
          <h6
            className="flex gap-[4px]  mr-[22px] items-center text-[16px] text-[#211A1D99]
"
          >
            BYN{" "}
            <Image
              src={"/bottom-b.svg"}
              alt="bottom.dvg"
              width={12}
              height={7}
            />
          </h6>
        </div>
      </div>
      <div className="w-[1px] h-auto mr-[14px] bg-[#458BD166]"></div>
      <div className="flex gap-[24px] items-center mr-[13px]">
        <h3 className="text-[#458BD1] text-[20px]">Тип жилья:</h3>
        <p className="text-[16px] text-[#211A1D]">квартира-студия</p>
        <Image src={"/bottom-b.svg"} alt="bottom.dvg" width={12} height={7} />
      </div>
      <div className="w-[1px] flex gap-[24px] h-auto mr-[9px] bg-[#458BD166]"></div>
      <div className="flex items-center gap-[10px]">
        <h3 className="text-[#458BD1] text-[20px]">Кол-во комнат: </h3>
        <div className="flex gap-[10px] list-none my-[15px] mr-[91px]">
          <li className="bg-[#FFDF42] rounded-md w-[30px] text-center py-[4px] text-[#211A1D]">
            1
          </li>
          <li className="border-[#FFDF42] border w-[30px] text-center py-[4px] rounded-md text-[#211A1D]">
            2
          </li>
          <li className="border-[#FFDF42] border w-[30px] text-center py-[4px] rounded-md text-[#211A1D]">
            3
          </li>
          <li className="border-[#FFDF42] border w-[30px] text-center py-[4px] rounded-md text-[#211A1D]">
            4+
          </li>
        </div>
      </div>
      <button className="w-[230px] py-[18px] text-center bg-[#FFDF42] rounded-[60px] text-black">
        ПОИСК
      </button>
    </div>
  );
}

export default BigInput;
