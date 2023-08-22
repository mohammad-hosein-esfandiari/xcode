import ReactQueryWrapper from "@/components/ReactQueryWrapper";
import PrivateRoute from "@/components/common/PrivateRoute";
import ScrollBug from "@/components/common/ScrollBug";
import ToastBox from "@/components/common/Toast/ToastBox";

const UnAuthPageLayout = ({ children }) => {
  return (
    <>
      <ScrollBug />
      {/* <PrivateRoute /> */}
      {/* <ToastBox /> */}
      <ReactQueryWrapper>{children}</ReactQueryWrapper>
    </>
  );
};

export default UnAuthPageLayout;
