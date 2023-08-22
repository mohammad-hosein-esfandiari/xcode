import TwoShowBox from "./TwoShowBox";

const TwoShowHolder = ({ courses }) => {
  return (
    <div className="grid pt-3 h-full md:grid-cols-2 sm:gap-8 lg:gap-4 gap-3">
      {courses.map((item) => (
        <TwoShowBox key={item._id} {...item} />
      ))}
    </div>
  );
};

export default TwoShowHolder;
