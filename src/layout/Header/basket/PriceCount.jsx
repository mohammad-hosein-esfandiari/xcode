


const PriceCount = ({price}) => {

    return (
        <div>
            <span className="xs:text-[22px] text-[18px] font-bold text-[#e05858]">
              {price}
            </span>
            <span className="text-[20px] ml-1 relative text-gray-400">
              $
            </span>
          </div>
    );
}

export default PriceCount;