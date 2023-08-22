import Link from "next/link";

const FooterItem = ({ title, child, size }) => {
  return (
    <li className={`w-[${size}] h-full`}>
      <h6 className=" text-white pr-0 pb-[2rem]">{title}</h6>
      {child.map((item) => (
        <Link
          key={item.id}
          href={`${item.href}`}
          className="text-white group z-20 w-fit flex py-2 text-[13px] items-center">
          {item.icon}
          <span className="mr-5 group-hover:text-[#FFA41B] trannsition-all duration-500">
            {item.text}
          </span>
        </Link>
      ))}
    </li>
  );
};

export default FooterItem;
