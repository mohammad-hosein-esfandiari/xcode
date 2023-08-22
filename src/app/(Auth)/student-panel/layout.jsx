
import AnimTrue from "@/components/common/AnimTrue";
import ReactQueryProvider from "@/components/common/ReactQueryProvider";
import ToastBox from "@/components/common/Toast/ToastBox";
import RightTabs from "@/components/pages/StudentPanel/layout/RightTabs";

const StudentPanelLayout = ({ children }) => {
  return (
    <ReactQueryProvider>
      <AnimTrue/>
      <ToastBox/>
      <main className="flex flex-col bg-linear1 justify-center relative w-full min-h-[100vh]">
        <section className="xl:container  lg:px-[100px]">
          <div className="ss:pl-[7px] relative hlg:h-[710px] lg:h-[580px] h-[100vh]  flex ss:flex-row flex-col-reverse items-center justify-between ss:bg-linear4 bg-linear3 mx-auto sm:shadow-modeShadow lg:rounded-lg ">
            <RightTabs />

            <div className="lg:w-[75%] overflow-hidden hlg:w-[77%] flex-1 xs:h-[98%] ss:mt-0 mt-[7.5px] ss:w-[92%] w-[97%] pb-2 rounded-lg bg-registerbg">
              {children}
            </div>
          </div>
        </section>
      </main>
    </ReactQueryProvider>
  );
};

export default StudentPanelLayout;
