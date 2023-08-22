
import BreadCrumb from "@/components/common/BreadCrumb/BreadCrumb";
import HeroSmallerIcon from "./HeroSmallerIcon";

const Hero = ({ title }) => {

  return (
    <>
      <div className="h-[80px]"></div>
      <section className=" bg-linear1 h-[230px]">
        <ul className="xl:container relative flex-col flex justify-center h-full px-6 sm:px-[100px]">
          <li>
            <HeroSmallerIcon/>
          </li>
          <li className="py-4">
            <h1 className=" md:text-[35px] font-bold text-[25px]  text-textColor">
              {title}
            </h1>
          </li>
          <li className="">
            {/* <BreadCrumb /> */}
          </li>
        </ul>
      </section>
    </>
  );
};

export default Hero;
