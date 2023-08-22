
const Summery = ({desc}) => {
  return (
    <div>
      <div>
        <h2 className="xs:text-[25px] ss:text-[30px] text-[18px] text-mode-color">
          شرح دوره
        </h2>
        <p className=" md:py-[40px] py-[20px] text-[14px] leading-[35px] text-mode-color">
       {desc}
        </p>
      </div>
      {/* <div>
        <h2 className="xs:text-[25px] ss:text-[30px] text-[18px] text-mode-color">
          آنچه از این دوره خواهید آموخت
        </h2>
        <ul className="[&>li]:text-[12px] [&>li]:py-1 py-4 text-mode-color">
          <li>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </li>
          <li>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </li>
          <li>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </li>
        </ul>
        <div className="py-8 text-mode-color">
          <h2 className="xs:text-[25px] ss:text-[30px] text-[18px]">
            گواهینامه
          </h2>
          <p className=" md:py-[40px] py-[20px] text-[14px] leading-[25px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.{" "}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Summery;
