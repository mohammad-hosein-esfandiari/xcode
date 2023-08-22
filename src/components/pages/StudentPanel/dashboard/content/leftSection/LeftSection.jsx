import RelatedBox from "./RelatedBox";

const LeftSection = ({ posts }) => {
  return (
    <div className="pb-2 relative z-8 sm:overflow-y-scroll scrollbar-hide md:h-[355px] h-fit">
      <h2 className="text-[18px] md:pt-0 pt-8 md:px-3 sticky top-0 z-[9] right-0 bg-registerbg pb-4 text-mode-color">
        دوره های پیشنهادی
      </h2>
      <div className="ss:px-3 mt-1">
        {posts
          .reverse()
          .slice(0, 8)
          .map((item, index) => (
            
            <RelatedBox
            key={item._id}
            {...item}
              bg={index % 2 == 0 ? "bg-[#525fe1]" : "bg-color-orange"}
            />
          ))}
      </div>
    </div>
  );
};

export default LeftSection;
