
import Hero from "@/components/common/hero/Hero";
import Image from "next/image";
import TitleRow from "./TitleRow";
import HeadLines from "./HeadLines";
import BlogsText from "./BlogsText";
import Comments from "./Comments";
import RelatedHolder from "./RelatedHolder";
import { textToObjectBlogs } from "@/core/utils/blogsAoiConvertor";
const BlogsDetail = ({post,news}) => {
  let text = "id:whatIsBackend;title:بک اند (Back End) چیست؟ چه اتفاقاتی اون پشت میفته؟-text:وظیفه‌ی یک برنامه نویس بک اند اینه که چیز هایی رو که هسته اصلی یک وبسایت رو تشکیل میدن برنامه نویسی کنه که کد هاش رو هیچکس جز خود برنامه نمیتونه ببینه. به زبان خیلی ساده بخوام بک اند رو توضیح بدم به اتفاقاتی که پشت یه وبسایت اتفاق میوفته، تا سایت به خوبی کار کنه، بک اند میگن؛ اما این پشت سایت دقیقا کجای سایت هست؟ اصلا مگه سایت پشت داره؟*باید بگم نه، سایت پشت نداره و بک اند نمیره پشت کامپیوتر از عقب کار کنه باهاش! حالا یه یه برنامه نویس بک اند کیست؟ به کسی که منطق و مغز یک وبسایت رو میسازه، برنامه نویس بک اند میگن. چطوری؟ مقاله رو بخون تا کامل تر و تخصصی تر متوجه شی که بک اند چیست!*توی این مقاله قصد داریم از زبان یکی از خبره ترین برنامه نویس های بک اند، در مورد مباحثی مثل بک اند چیست، برنامه نویس بک اند، بازار کار بک اند و … توضیح بدیم و به سوالات پر تکرار مرتبط با بک اند پاسخ بدیم.|id:backendAndFrontendDiffrence;title:تفاوت بک اند و فرانت اند-img:http$//res.cloudinary.com/df9w7u89a/image/upload/v1685265916/qmvct93xh3ymepsycam7.jpg,text:واضح بگیم، فرانت یعنی ظاهر، قسمت جلویی و قسمت قابل مشاهده از هر چیز؛ کلمه بک یعنی پشت، باطن و قسمت غیر قابل مشاهده از هر چیز. در حوزه برنامه نویسی وب هم دقیقا همینطوره!|id:backendSkills;title:مهارت های فنی مورد نیاز یک برنامه نویس بک اند چی لازمه بلد باشم؟-text:یکی از مهم ترین قسمت های یادگیری یه حوزه جدید اینه که ابزار ها و مفاهیم مربوط بهش رو بدونیم تا یه شروع خوب داشته باشیم حالا مهارت های لازم برای برنامه نویسی بک اند چیست؟,numberList:دانش حداقلی از مفهوم فرانت اند و بک اند*تسلط به حداقل یک زبان برنامه نویسی سمت سرور*گیت|id:react-box:بعضی وقتا فقط پیدا کردن راه حل جواب نمیده و ذهن شما باید آمادگی داشته باشه تا مسائل رو حل کنه و منطقی جلو بره، از بقیه برنامه نویس ها سوال کنه تا بتونه توی مسیر پیشرفت کنه که حتی اگه الان آمادگی اینکار رو ندارید نگران نباشید چون به شرط اینکه با علاقه پیش برید، به این مرحله هم میرسید.|id:baseBackendSkills;title:مهارت های پایه و اساسی یک برنامه نویس بک اند-bolletList:title=مهارت خلاقیت;text=مهارت خلاقیت بالا حرف اول رو توی برنامه نویس بک اند شدن میزنه، شما قراره یه چیز جدید رو خلق کنید پس اولین چیزی که نیاز دارید خلاقیته.*title=قوه حل مسئله;text=توی این مسیر تا دلتون بخواد چالش جلوی روتون دارید و بدون یه مغز خلاق که به دنبال راه حل میگرده، احتمالا نتونید وارد این بازی مهیج شید"


  const details = textToObjectBlogs(post.text)
  const detailsKey = details.filter(item => item.title)
  const detailsId = detailsKey.map(item => {
    return {
      id:item.id,
      title:item.title
    }
  })
  return (
    <>
      <Hero title="جزئیات اخبار و مقالات" />
      <section className=" xl:container w-full  mt-4 lg:px-[100px] sm:px-6 px-4">
        <TitleRow title={post.title.split('|')[0]} />
        <div className="w-full md:px-40  overflow-hidden">
        <Image alt="news" priority={true} className="w-full rounded-[4px] h-full " width={500} height={500} src={post.image} />

        </div>
        <div className="md:px-24 ">
          <div className="pb-24 ">
            <HeadLines detailsId={detailsId} />
            {
              details.map((item,index)=>(

                <BlogsText key={index} {...item} />
              ))
            }
            <RelatedHolder news={news} newsId={post._id}/>
          </div>
        </div>
      </section>
      <div className="bg-linear5">
        <div className=" xl:container w-full  lg:px-[100px] py-16 sm:px-6 px-4">
          {/* <Comments /> */}
        </div>
      </div>
    </>
  );
};

export default BlogsDetail;
