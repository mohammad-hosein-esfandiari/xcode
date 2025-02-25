import ThemeSwitcher from "@/layout/ThemeSwitcher/ThemeSwitcher";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import GetUserInfo from "@/components/common/GetUserInfo";
import ToastBox from "@/components/common/Toast/ToastBox";
import Transition from "@/components/common/Transition";
export const metadata = {
  title: "XCode Academy ",
  description: "Generated by xcode team",
};

export default async function RootLayout({ children }) {

  return (
    <html>
      <body>
    <Transition/>
      <ToastBox/>
      <GetUserInfo/>
        {children}
        <ThemeSwitcher />
      </body>
    </html>
  );
}
