import { CenterLinks } from "./CenterLinks";

import RightBtn from "./RightBtn";

export default function RightPart() {
  return (
    <div className="flex justify-between h-full py-1 md:flex-1 ">
      <CenterLinks />
      <RightBtn />
    </div>
  );
}
 