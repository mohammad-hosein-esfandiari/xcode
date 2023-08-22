import Link from "next/link";

const LoginComment = () => {
    return (
        <ul className=" border-r-[4px] w-full bg-[#dcdcdc55] text-mode-color shadow-md border-red-500  flex flex-col items-center  p-8 mb-8  rounded-md ">
        <li>
        <div className="flex ">
          لطفا برای ثبت نظر
          <Link
            href="/auth/login"
            className=" underline px-1  text-[#8a94ff] hover:text-color-orange2">
            وارد سایت
          </Link>
          شوید.
        </div>
      </li>
        </ul>
    );
}

export default LoginComment;