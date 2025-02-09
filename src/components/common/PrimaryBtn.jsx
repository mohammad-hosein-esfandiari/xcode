import Link from "next/link";
import LinkCp from "./LinkCp";

const PrimaryBtn = ({ href, text, icon }) => {
  return (
    <LinkCp
      href={href}
      className="bg-primary rounded-[4px] flex items-center sm:mr-[8px] h-[34px] py-[6px] px-[10px] text-[14px] overflow-hidden text-white shadow-btnShadow hover:bg-[#5c5c5c] transition-all duration-300">
      {icon && <i className="text-[16px] mr-2">{icon}</i>}
      <span>{text}</span>
    </LinkCp>
  );
};

export default PrimaryBtn;
