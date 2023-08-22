"use client";
import { useEffect, useState } from "react";
import PanelHeading from "../PanelHeading";
import PageToggle from "@/components/common/PageToggle/PageToggle";
import Content from "./Content";
import AcceptingModal from "@/components/common/Modal/AcceptingModal";
import { toast } from "react-toastify";
import api from "@/core/interceptors/apiInterceptor";
import { BarLoader } from "react-spinners";
import { useFetchAllCourses } from "@/core/services/react-query/useGetAllCourses";
import { useModalAccept } from "@/context/modalBox";
import { useUserInfo } from "@/context/userInfoStore";
import NoCourses from "@/components/common/NoCourses";
import PaginationBox from "@/components/common/Pagination/PaginationBox";
import Pagination2 from "@/components/common/Pagination/Pagination2";
import { paginationFunc } from "@/core/utils/pagination";
import { useSearchParamsInUrl } from "@/hooks/useSearchParamsInUrl";

const MyCourses = () => {
  const { limit, page } = useSearchParamsInUrl();

  const [pageToggle, setPageToggle] = useState(false);
  const [pageShow, setPageShow] = useState(6);
  const showModal = useModalAccept((state) => state.showModal);
  const info = useModalAccept((state) => state.info);
  const setLoading = useModalAccept((state) => state.setLoading);
  const setSuccess = useModalAccept((state) => state.setSuccess);
  const user = useUserInfo((state) => state.userInfo);
  const [array, setArray] = useState([]);

  const [filterArray, setFilterArray] = useState([]);
  useEffect(() => {
    const { paginatedArray } = paginationFunc(limit, page, array);
    setFilterArray(paginatedArray);
  }, [page, limit, array]);
  const onSuccess = (data) => {
    const studentCourses = data?.data.result.filter((item) =>
      item.students.some((el) => el._id === user.studentModel._id)
    );
    setArray(studentCourses);
  };
  const { isLoading, isError, error, isSuccess, refetch } =
    useFetchAllCourses(onSuccess);
  if (isLoading)
    return (
      <div className=" w-full h-full flex items-center justify-center">
        <BarLoader size={30} color="var(--primary-color)" />
      </div>
    );
  if (isError) return <h1>{error.message}</h1>;

  const deleteCourse = async () => {
    setLoading(true);
    try {
      const res = await api.post(
        "/course/removeStudentFromCourse/" + user.studentModel._id,
        { courseId: info }
      );
      setSuccess(true);
      setLoading(false);
      setArray(array.filter((item) => item._id !== info));
    } catch (error) {
      toast.error("خطایی رخ داده است");
      console.log(error);
    }
  };

  return (
    <div className=" pb-2 overflow-y-scroll scrollbar-hide pt-2 w-full flex-col flex h-full ">
      <div className="ss:px-8 px-4">
        <PanelHeading title="دوره های من" />
      </div>

      <>
        {" "}
        {filterArray.length ? (
          <div className="flex-1  pt-2 flex-col flex justify-between">
            <div className="flex-1 flex pb-1  flex-col">
              <div className="flex ss:px-8 px-4 flex-row-reverse">
                <PageToggle
                  pageToggle={pageToggle}
                  setPageShow={setPageShow}
                  pageShow={pageShow}
                  setPageToggle={setPageToggle}
                  show1={2}
                  show2={4}
                  show3={6}
                />
              </div>
              <Content
              setFilteredData={setFilterArray}
                myCourses={true}
                studentCourses={filterArray}
                limit={pageShow}
              />
            </div>
            <div className="ss:px-8 px-4">
              <Pagination2
                href="student-panel/my-courses"
                posts={array}
                bgNone="scale-[0.8]  pt-2"
              />
            </div>
          </div>
        ) : (
          <NoCourses />
        )}
      </>

      <AcceptingModal submitHandler={deleteCourse} />
    </div>
  );
};

export default MyCourses;
