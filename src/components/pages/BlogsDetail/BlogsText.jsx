import Image from "next/image";
import blogdetail from "@/assets/images/course-02big.png";
const BlogsText = ({ id, title, category, details }) => {
  return (
    <div className="mt-8 leading-8 ">
      <div className="sm:text-[16px] text-[14px]">
        {title && (
          <h2
            id={id}
            className="text-[20px] text-mode-color pb-8 pt-[50px] font-bold">
            {/* بک اند (Back End) چیست؟ چه اتفاقاتی اون پشت میفته؟ */}
            {title}
          </h2>
        )}

        {
          details.text && (<>
             {  details.text.map((item,index) => (
          <p key={index} className="text-mode-color mb-4">
            {/* بک اند چیست؟ اگه به حوزه برنامه نویسی وب علاقه داشته باشید، حتما
            کلمه های فرانت اند و بک اند به گوشتون خورده. back-end: برنامه نویسی
            بک اند (Back End) مربوط به کدنویسی و برنامه نویسی چیز هایی هست که
            کاربرد اون رو مشاهده نمیکنه و نمیتونه ببینه، یعنی مربوط به کارهای
            پشت صحنه وب سایته. مثلا وقتی که یک وبسایت، مقالات را از دیتابیس
            دریافت میکنه، این کار توسط بک اند انجام میشه. */}
            {item}
          </p>
        ))}
          </>)
        }
     
        {details.img && (
          <div className="md:px-32 sm:px-16 my-8 ">
            <Image width={500} height={500} alt="news" className="h-fit rounded-[4px] w-full" src={details.img.split('$').join(':')} />
          </div>
        )}

        {/* <p className=" text-mode-color ">
          وظیفه‌ی یک برنامه نویس بک اند اینه که چیز هایی رو که هسته اصلی یک
          وبسایت رو تشکیل میدن برنامه نویسی کنه که کد هاش رو هیچکس جز خود برنامه
          نمیتونه ببینه. به زبان خیلی ساده بخوام بک اند رو توضیح بدم به اتفاقاتی
          که پشت یه وبسایت اتفاق میوفته، تا سایت به خوبی کار کنه، بک اند میگن؛
          اما این پشت سایت دقیقا کجای سایت هست؟ اصلا مگه سایت پشت داره؟
        </p>
        <p className=" text-mode-color ">
          وظیفه‌ی یک برنامه نویس بک اند اینه که چیز هایی رو که هسته اصلی یک
          وبسایت رو تشکیل میدن برنامه نویسی کنه که کد هاش رو هیچکس جز خود برنامه
          نمیتونه ببینه. به زبان خیلی ساده بخوام بک اند رو توضیح بدم به اتفاقاتی
          که پشت یه وبسایت اتفاق میوفته، تا سایت به خوبی کار کنه، بک اند میگن؛
          اما این پشت سایت دقیقا کجای سایت هست؟ اصلا مگه سایت پشت داره؟
        </p> */}
        {details.box && (
          <div className="py-8 bg-linear5 sm:px-16 px-6 text-[18px]  text-primary font-bold leading-8 relative my-8 rounded-[4px] shadow-boxShadow border-t-[4px] border-primary">
            <p>
             {details.box}
            </p>
          </div>
        )}
        {/* <p className=" text-mode-color ">
          وظیفه‌ی یک برنامه نویس بک اند اینه که چیز هایی رو که هسته اصلی یک
          وبسایت رو تشکیل میدن برنامه نویسی کنه که کد هاش رو هیچکس جز خود برنامه
          نمیتونه ببینه. به زبان خیلی ساده بخوام بک اند رو توضیح بدم به اتفاقاتی
          که پشت یه وبسایت اتفاق میوفته، تا سایت به خوبی کار کنه، بک اند میگن؛
          اما این پشت سایت دقیقا کجای سایت هست؟ اصلا مگه سایت پشت داره؟
        </p>
        <p className=" text-mode-color ">
          یکی از مهم ترین قسمت های یادگیری یه حوزه جدید اینه که ابزار ها و
          مفاهیم مربوط بهش رو بدونیم تا یه شروع خوب داشته باشیم؛ حالا مهارت های
          لازم برای برنامه نویسی بک اند چیست؟
        </p> */}
        {details.numberList && (
          <ul className="pr-4 text-mode-color my-4 ">
            {details.numberList.map((item, index) => (
              <li key={index} className="mt-2">
                <span>{(index + 1).toLocaleString("fa-IR")}.</span>{item}
              </li>
            ))}
          </ul>
        )}

        {/* <p className="text-mode-color">
          مهارت های پایه و اساسی یک برنامه نویس بک اند – به جز مهارت فنی چی لازم
          دارم؟
        </p> */}
        {details.bolletList && (
          <ul className="pr-4 mt-4 list-disc text-mode-color">
            {details.bolletList.map((item, index) => (
              <li key={index} className="mt-2">
                <h4 className="font-bold">{item.title}
                </h4>
                <p>
                  {/* مهارت خلاقیت بالا حرف اول رو توی برنامه نویس بک اند شدن میزنه،
                  شما قراره یه چیز جدید رو خلق کنید پس اولین چیزی که نیاز دارید
                  خلاقیته. */}
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default BlogsText;
