import ScrollBug from "@/components/common/ScrollBug";
import Footer from "@/layout/Footer/Footer";
import { Header } from "@/layout/Header/Header";
import ProgressBar from "@/layout/ProrgressBar/ProgressBar";

const layout = ({ children }) => {
  return (
    <>
      {/* <Transition/> */}
      <ScrollBug />
      <Header />
      <ProgressBar />
      {children}
      <Footer />
    </>
  );
};

export default layout;
