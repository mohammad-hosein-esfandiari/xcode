


const PriceCount = ({price}) => {

    return (
        <div>
            <span className="xs:text-[22px] text-[18px] ml-2 font-bold text-[#e05858]">
              {price.toLocaleString('fa-IR')}
            </span>
            <span className="text-[12px] relative text-gray-400">
              توما
              <span className="absolute left-0 top-[-12px]">ن</span>
            </span>
          </div>
    );
}

export default PriceCount;