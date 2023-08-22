import BoxHolder from "./BoxHolder";
import TextHolder from "./TextHolder";

const Services = () => {
  return (
    <section className=" bg-linear2  mt-[-150px] pb-10">
      <div className="xl:container relative xl:px-[100px] px-[30px] sss:pt-[250px] pt-[150px] lg:flex-row flex flex-col-reverse">
        <BoxHolder />
        <TextHolder />
      </div>
    </section>
  );
};

export default Services;
