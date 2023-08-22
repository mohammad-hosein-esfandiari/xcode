import SixShowBox from "./SixShowBox";
import TableHead from "./TableHead";

const SixShowHolder = ({ courses }) => {
  return (
    <div className="h-full flex flex-col ">
      <TableHead />
      <div className="flex-1 grid grid-rows-6  gap-3 pt-3 ">
        {courses.map((item) => (
          <SixShowBox key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SixShowHolder;
