import BgImageOrange from "./../assets/images/BgImageOrange.png";
import BgImageBlue from "./../assets/images/BgImageBlue.png";
import BgImageRed from "./../assets/images/BgImageRed.png";


export const heroImg = [
    {
        id:1,
        image:BgImageOrange,
        boxDelay:0.3,
        Imgdelay: 0.6,
        className: ` md:border-[22px] ss:border-[16px] border-[10px] rounded-full border-color-border1 shadow-boxShadow md:absolute 
        
        left-[50px]
        md:top-[240px] md:left-[200px]  md:w-[350px] md:h-[350px]
        lg:left-[200px] lg:top-[280px]  lg:w-[400px] lg:h-[400px]  
        sm:w-[75%] sm:top-[155px]  md:left-[200px]
        hlg:w-[500px] hlg:h-[500px] 
         w-[100%]
        `,
        bgColor: "bg-color-orange",
        overflow: "overflow-hidden",
        scale:1.1,
        y:10,
        yy:1000,
    },
    {
        id:2,
        image:BgImageBlue,
        boxDelay:2,
        Imgdelay: 2,
        className: ` shadow-boxShadow absolute border-[15px] rounded-full border-color-border1 left-[50px] hidden  
        md:w-[190px] md:h-[180px] md:top-[225px] md:left-[100px] md:block
        lg:w-[211px] lg:h-[200px] lg:top-[295px] lg:left-[80px]
        hlg:w-[251px] hlg:h-[240px] 
        
        `,
        bgColor: "bg-primary",
        scale:1.18,
        y:-36,
        yy:-35,
    },
    {
        id:3,
        image:BgImageRed,
        boxDelay:3,
        Imgdelay: 3.4,
        className: `shadow-boxShadow absolute border-[10px]
        hidden border-color-border1
        md:w-[120px]  md:h-[120px] md:top-[110px] md:left-[260px] md:block
        lg:w-[140px]  lg:h-[140px] lg:left-[280px] lg:top-[120px]
        hlg:w-[150px] hlg:h-[150px] hlg:top-[100px]
        rounded-full  left-[280px] top-[130px] `,
        bgColor: "bg-color-orange2",
        scale:1.2,
        overflow: "overflow-hidden",
        y:4,
        yy:1700,

    },
]