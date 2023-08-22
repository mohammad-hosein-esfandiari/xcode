import { HiMinusSm } from "react-icons/hi";

const HeadLines = ({ detailsId }) => {
  return (
    <div className="mt-8 text-mode-color">
      <h6 className="text-[20px] py-4 font-bold">
        آنچه در این مقاله خواهید آموخت
      </h6>
      <ul className="bg-[#dcdcdc55] rounded-[4px] p-4">
        {detailsId.map((item) => (
          <li key={item.id} className=" w-fit hover:underline underline-offset-8 decoration-1 hover:text-primary flex items-center mt-2 ">
            <HiMinusSm />
            <a className="mr-2  " href={`#${item.id}`}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeadLines;
