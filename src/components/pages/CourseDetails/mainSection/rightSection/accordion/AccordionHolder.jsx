'use client'
import { convertTopicToObj } from "@/core/utils/topicApiConvertor";
import Accordion from "./Accordion";
import { getCookie } from "@/core/utils/cookies.storage";
import { useUserInfo } from "@/context/userInfoStore";
import { useGetLeesonById } from "@/core/services/react-query/useGetLesson";
import { BarLoader } from "react-spinners";
import InActiveCp from "@/components/common/InActiveCp";

const AccordionHolder =  ({  students,lessons }) => {
  const user = useUserInfo(state => state.userInfo);
  // const { data, isLoading, isError, error,isSuccess, refetch } = useGetLeesonById(lessonId);
  // if (isLoading)
  //   return (
  //     <div className=" w-full h-full flex items-center justify-center">
  //       <BarLoader size={30} color="var(--primary-color)" />
  //     </div>
  //   );
  // if (isError) return <h1>{error.message}</h1>;

  const isInStudents = students.some(item => item._id === user?.studentModel._id)
  // const headline = convertTopicToObj(data.data.result.topics);
  return (
    <div> 
          {!user.studentModel.isActive && isInStudents && (
            <InActiveCp text="You have been disabled by the site administrator and are unable to view the videos. Contact site support to check." />
            )} 
      {lessons.map((item, index) => (
        <Accordion
        isInStudents={isInStudents} 
          key={index}
          lessonId={item._id}
          name="courseDetail"
          type="radio"
          details={item.details}
          title={item.title}
          id={`season${index + 1}`}
          index={index}
        />
      ))}
    </div>
  );
};

export default AccordionHolder;
