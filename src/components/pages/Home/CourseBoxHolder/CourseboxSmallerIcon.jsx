"use client"
import { motion } from "framer-motion";

import Image from "next/image";
import image7 from "@/assets/images/smallerIcon/7.png"
import image27 from "@/assets/images/smallerIcon/27.png"
import image10 from "@/assets/images/smallerIcon/10.png"
import image6 from "@/assets/images/smallerIcon/6.png"
import image18 from "@/assets/images/smallerIcon/18.png"
import image29 from "@/assets/images/smallerIcon/29.png"

const CourseboxSmallerIcon = () => {
    return (
        <> 
        <motion.div whileInView={{opacity:1}} viewport={{once:true}} initial={{opacity:0}} transition={{delay:0.5}} className="absolute w-[120px] h-[120px] opacity-80 right-[210px] top-[-280px] md:block hidden">
            <Image src={image7} width='auto' height='auto' priority={true} alt="pic"/>
        </motion.div>
        <motion.div whileInView={{opacity:1}} viewport={{once:true}} initial={{opacity:0}} transition={{delay:0.5}} className="absolute w-[110px] h-[110px] opacity-80 left-[40px] top-[-280px] md:block hidden">
            <Image src={image10} width='auto' height='auto' priority={true} alt="pic"/>
        </motion.div>
        <motion.div initial={{opacity:0}} viewport={{once:true}} whileInView={{opacity:1}} transition={{delay:0.5}} className="absolute top-[-80px] right-[65%] md:block hidden">
            <svg
              className="opacity-10"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="#525fe1"
              version="1.1"
              viewBox="0 0 512 512"
              xmlSpace="preserve">
              <path d="M437.02 74.98C388.669 26.628 324.381 0 256.001 0S123.333 26.628 74.981 74.98C26.63 123.332.001 187.62.001 256c0 68.38 26.628 132.667 74.98 181.019S187.62 512 256 512s132.668-26.628 181.019-74.98c48.352-48.352 74.98-112.639 74.98-181.019C512 187.62 485.372 123.332 437.02 74.98zm-16.543 6.166a245.89 245.89 0 015.274 5.102c29.312 29.312 50.096 64.874 61.138 103.676-16.073-15.992-32.241-34.987-37.595-42.085-5.165-6.848-14.345-9.33-24.558-6.635-15.224 4.015-33.111 19.759-36.407 44.842-2.351 17.9-19.659 19.991-48.766 17.549-2.368-.199-4.606-.387-6.606-.505-2.052-.12-7.02-4.864-11.131-21.955-3.631-15.091-4.688-31.734-4.741-39.188-.049-6.815 2.25-12.163 7.026-16.351 8.577-7.522 25.193-10.843 42.337-8.461 21.735 3.019 36.531.309 45.238-8.285 7.478-7.378 9.102-17.38 8.791-27.704zM47.959 375.966a237.13 237.13 0 01-18.473-40.107c4.431 1.721 8.823 3.105 12.982 4.412 13.628 4.281 21.525 7.119 24.181 15.201-.596 3.028-8.595 10.734-13.921 15.864a696.915 696.915 0 00-4.769 4.63zm158.866 115.072c-45.366-9.395-87.056-31.767-120.576-65.287a242.52 242.52 0 01-29.627-35.926c2.392-2.408 4.801-4.74 7.161-7.015 11.579-11.154 21.579-20.787 18.173-31.785-5.165-16.676-20.185-21.395-34.712-25.959-8.269-2.598-16.79-5.284-24.071-10.179-4.776-19.021-7.238-38.766-7.238-58.887 0-64.123 24.971-124.41 70.314-169.752 20.841-20.84 44.843-37.363 70.918-49.15 10.59 33.361 12.142 57.215 4.588 70.958-5.882 10.702-16.534 13.237-25.095 15.274l-1.146.274c-13.364 3.214-18.405 12.122-21.741 18.017-2.669 4.717-2.899 4.703-4.002 4.63a8.815 8.815 0 01-.347-.031c-.174-.583-.365-1.415-.517-2.079-1.176-5.124-3.368-14.66-16.952-18.236-7.164-1.886-14.764-.357-21.983 4.418-12.826 8.486-23.588 26.824-26.174 44.593-1.924 13.216-1.416 32.52 1.291 49.179 3.568 21.959 10.02 35.148 19.176 39.201 15.192 6.725 26.4 1.834 34.585-1.736 8.323-3.631 12.5-5.453 20.681 1.28 16.252 13.376 25.287 38.228 22.347 46.747-.345 1.002-.595 1.725-2.879 1.781-17.156.419-31.33 7.801-36.113 18.808-3.378 7.774-1.607 16.404 4.857 23.677 7.754 8.724 21.422 8.175 37.246 7.542 19.236-.773 41.048-1.648 55.446 12.99 8.236 8.372 14.28 27.119 15.773 48.924 1.57 22.925-1.761 46.714-9.383 67.729zm218.928-65.287a242.221 242.221 0 01-39.965 32.284c-1.038-1.692-.999-3.687-.056-6.51 11.222-33.665-2.067-65.82-17.456-103.052a1680.198 1680.198 0 01-6.082-14.853c-12.797-31.848 11.543-49.412 39.752-63.648 35.986-18.162 66.434-6.708 93.397 4.754-4.375 57.067-28.691 110.127-69.59 151.025zm-30.986-170.005c-18.427 9.3-67.375 34.003-47.359 83.816a1666.915 1666.915 0 006.14 14.999c14.17 34.286 26.409 63.896 17.064 91.926-2.441 7.323-1.843 14.113 1.539 19.716-35.149 19.49-74.851 29.864-116.152 29.864-11.216 0-22.31-.781-33.231-2.284 7.687-22.402 10.989-47.439 9.337-71.561-1.794-26.203-9.197-47.712-20.311-59.009-19.344-19.666-47.141-18.553-67.445-17.738-9.78.392-21.954.88-24.697-2.205-3.412-3.839-2.497-5.948-2.151-6.74 1.851-4.259 10.151-8.941 21.885-9.227 8.485-.207 14.883-4.769 17.555-12.515 6.322-18.331-9.476-49.588-27.285-64.246-15.724-12.942-28.125-7.532-37.181-3.582-7.248 3.163-12.977 5.66-21.763 1.77-1.532-.678-6.637-7.127-9.897-27.185-2.43-14.953-2.932-32.768-1.25-44.329 1.918-13.182 10.17-27.626 19.196-33.597 3.374-2.233 6.445-3.005 9.135-2.299 4.267 1.123 4.523 2.239 5.477 6.393 1.016 4.425 3.131 13.633 15.339 14.442 11.334.764 15.899-7.332 18.925-12.682 2.775-4.904 4.966-8.777 11.597-10.372l1.11-.265c9.758-2.321 26.087-6.207 35.371-23.1 9.952-18.106 8.724-45.87-3.77-84.721 26.531-9.898 54.892-15.079 84.053-15.079 53.939 0 105.158 17.673 147.056 50.273l.102.828c1.531 12.179 3.115 24.771-2.663 30.473-4.804 4.742-15.818 6.07-31.851 3.842-26.127-3.629-45.561 3.955-55.037 12.264-8.229 7.215-12.537 17.053-12.456 28.445.078 10.902 1.709 28.365 5.183 42.802 5.283 21.958 13.925 33.444 25.688 34.136 1.801.106 3.942.286 6.209.476 5.37.45 11.763.987 18.429.987 6.238-.001 12.715-.471 18.807-1.921 21.045-5.009 27.201-19.306 28.662-30.419 2.497-19.004 16.121-29.256 24.669-31.51 3.626-.955 6.675-.631 7.774.823 7.77 10.302 35.253 42.243 56.358 59.668A243.152 243.152 0 01496.061 256c0 .581-.017 1.159-.021 1.739-27.852-11.513-61.532-22.051-101.273-1.993z"></path>
              <path d="M297.428 271.875a7.966 7.966 0 00-7.967 7.967c0 7.027-5.717 12.745-12.745 12.745-7.026 0-12.744-5.717-12.744-12.745 0-4.4-3.566-7.967-7.967-7.967a7.966 7.966 0 00-7.967 7.967c0 7.027-5.717 12.745-12.744 12.745s-12.745-5.717-12.745-12.745c0-4.4-3.566-7.967-7.967-7.967s-7.967 3.567-7.967 7.967c0 15.814 12.865 28.68 28.68 28.68 8.133 0 15.487-3.404 20.711-8.861 5.225 5.458 12.578 8.861 20.711 8.861 15.815 0 28.68-12.866 28.68-28.68a7.97 7.97 0 00-7.969-7.967zM351.668 232.131a7.966 7.966 0 00-7.967 7.967v8.797c0 4.4 3.566 7.967 7.967 7.967s7.967-3.567 7.967-7.967v-8.797a7.966 7.966 0 00-7.967-7.967zM160.339 232.131a7.966 7.966 0 00-7.967 7.967v8.797c0 4.4 3.566 7.967 7.967 7.967s7.967-3.567 7.967-7.967v-8.797a7.966 7.966 0 00-7.967-7.967z"></path>
            </svg>
        </motion.div>
        <motion.div animate={{y:[0,80,0]}} initial={{y:0}} transition={{delay:0.5,duration:10,ease: "linear",repeat:Infinity,repeatType:"loop"}} className="absolute w-[110px] h-[110px] opacity-80 left-[20px] top-[80px] md:block hidden">
            <Image src={image27} width='auto' height='auto' priority={true} alt="pic"/>
        </motion.div>
                
        <div className="absolute w-[300px] h-[300px] opacity-80 left-[30%] top-[400px] md:block hidden">
            <Image src={image18} width='auto' height='auto' priority={true} alt="pic"/>
        </div>
        <div className="absolute w-[130px] h-[130px] opacity-70 right-0 bottom-[300px] md:block hidden">
            <Image src={image6} width='auto' height='auto' priority={true} alt="pic"/>
        </div>

        </>
    );
}

export default CourseboxSmallerIcon;