import SectionTitle from "../SectionTitle";
import TeacherBox from "./TeacherBox";
import TeacherSmallerIcon from "./TeacherSmallerIcon";

const Teachers = ({ teachers }) => {
  return (
    <>
      <SectionTitle title="اساتید برتر" />
      <section className="xl:container relative grid md:grid-cols-4 xs:grid-cols-2 xs:gap-8 md:px-[100px] xs:px-10 sss:px-[30px] px-[10px] pb-16">
        <TeacherSmallerIcon />
        {teachers.map((item) => (
          <TeacherBox key={item._id} {...item} />
        ))}
      </section>
    </>
  );
};

export default Teachers;
