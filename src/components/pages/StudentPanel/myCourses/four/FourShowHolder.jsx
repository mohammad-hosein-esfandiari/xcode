import FourShowBox from "./FourShowBox";

const FourShowHolder = ({ courses }) => {
  return (
    <div className="grid pt-3 h-full md:grid-cols-2 md:grid-rows-2 sm:gap-6 gap-4">
      {courses.map((item) => (
        <FourShowBox key={item._id} {...item} />
      ))}
    </div>
  );
};

export default FourShowHolder;
