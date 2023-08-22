import CheckedCel from "./CheckedCel";

const Cel = ({ day }) => {
  const num = (day + 1).toLocaleString("fa-IR");
  return (
    <div className="border-b-[1px] p-1 relative border-l-[1px] border-mode-color">
      <span className="text-mode-color absolute left-2 top-2">
        {day + 1 < 10 ? `۰${num}` : num}
      </span>
      {day === 11 && (
        <CheckedCel title="زبان انگلیسی" celBg='bg-color-green' datBg='bg-[#FAD336]' num={num}/>
      )}
      {day === 7 && (
        <CheckedCel title=" برنامه نویسی" celBg='bg-color-orange' datBg='bg-[#999]' num={num}/>
      )}
      {day === 16 && (
        <CheckedCel title=" برنامه نویسی" celBg='bg-[#525fe1]' datBg='bg-color-green' num={num}/>
      )}
    </div>
  );
};

export default Cel;
