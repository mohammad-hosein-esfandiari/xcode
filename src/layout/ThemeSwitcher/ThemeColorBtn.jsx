'use client'
import ThemeRadio from "./ThemeRadio";
const ThemeColorBtn = () => {

  return (
    <div className="flex flex-col items-center mt-2">
      <ThemeRadio
        
        id="blue"
        name="a"
        color="checked:bg-[#525fe1] outline-[#525fe1]"
      />
      <ThemeRadio
        id="green"
        name="a"
        color="checked:bg-color-green outline-color-green"
      />
      <ThemeRadio
        id="orange"
        name="a"
        color="checked:bg-color-orange outline-color-orange"
      />
    </div>
  );
};

export default ThemeColorBtn;
