import LinkItem from "./LinkItem";
import { studentTabLink } from "@/constant/studentPanelLink";
const Tablinks = () => {
  return (
    <ul className="ss:py-2 flex-1 lg:pr-6  pl-6 ss:mr-1 mr-4 ss:block flex items-center justify-between ss:mt-[45px]">
      {studentTabLink.map((item) => (
        <LinkItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default Tablinks;
