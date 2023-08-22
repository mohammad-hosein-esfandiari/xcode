
import { servicesItem } from "@/constant/servicesItem";
import ServicesSmallerIcon from "./ServicesSmallerIcon";
import TextHodlerAnimate from "./TextHodlerAnimate";

const TextHolder = () => {
  return (
    <TextHodlerAnimate>
        <ServicesSmallerIcon />
        <h1
          className="text-[10px]  text-primary w-fit mx-auto font-bold border-b-[1px] border-slate-400
        lg:pr-4 lg:text-right lg:font-normal lg:text-[20px] lg:border-none lg:mx-0 lg:w-full pb-4 xs:px-8
        ss:text-[25px]
        sss:text-[18px]

        ">
          در تلاشیم که بیشترین خدمات را ارائه دهیم
        </h1>
        <li>
          <h2
            className="lg:block hidden  text-[40px] 
          lg:text-right text-center text-textColor font-bold lg:py-6
          ">
            خدماتی که ارائه میدهیم:
          </h2>
          <ul
            className=" sss:flex justify-evenly items-center text-[12px] pt-8 flex-wrap
          lg:block lg:pr-4  lg:text-[18px] lg:leading-[58px]  lg:pt-0
          ">
            {servicesItem.map((item) => (
              <li
                key={item.id}
                className="w-[100%]  mt-4 py-2 flex flex-col justify-center items-center
              lg:w-fit text-textColor lg:py-0 lg:text-right lg:flex-row lg:justify-start
              xs:w-[50%] 
              sm:w-[25%] sm:mt-0

              ">
                <i
                  className="border-[2px] border-color-border2 rounded-full p-4 text-2xl mb-4 
                lg:p-0 lg:mb-0 lg:border-none
                ">
                  {item.icon}
                </i>
                <h3
                  className="lg:font-normal 
                lg:pr-4 
                ">
                  {item.title}
                </h3>
              </li>
            ))}
          </ul>
        </li>
        <p
          className="mt-[50px] text-primary text-[18px] hidden
        md:mt-[100px] lg:block
        ">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است{" "}
        </p>
    </TextHodlerAnimate>
  );
};

export default TextHolder;
