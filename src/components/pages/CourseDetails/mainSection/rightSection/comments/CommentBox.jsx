"use client";
import LoginComment from "../accordion/LoginComment";

import UserCommentTextbox from "./UserCommentTextbox";
import CommentsHolder from "./CommentsHolder";
import UserCmInfo from "./UserCmInfo";

import { getCookie } from "@/core/utils/cookies.storage";
import { useUserInfo } from "@/context/userInfoStore";
import InActiveCp from "@/components/common/InActiveCp";

const CommentBox = ({ courseId, allComments }) => {
  const user = useUserInfo((state) => state.userInfo);
  const IsUserLoggedIn = useUserInfo((state) => state.login);

  return (
    <div className="w-full h-full " dir="rtl">
      {!IsUserLoggedIn && <LoginComment />}

      <ul className="py-4">
        <li className="w-full h-full">
          <ul className="flex flex-col">
            <li>
              <h2 className="xs:text-[25px] ss:text-[40px] text-mode-color text-[18px]">
                نظرات
              </h2>
            </li>
            <CommentsHolder
              userRole={user}
              allComments={allComments}
              courseId={courseId}
            />

            {user.studentModel.role == "student" && (
              <>
                {IsUserLoggedIn && user.studentModel.isActive && (
                  <>
                    <UserCmInfo userInfo={user} />
                    <UserCommentTextbox
                      courseId={courseId}
                      userInfo={user.studentModel}
                    />
                  </>
                )}
              </>
            )}
            {IsUserLoggedIn && !user.studentModel.isActive && (
              <InActiveCp text="شما از سمت مدیر سایت غیرفعال شدید وقادر به گذاشتن کامنت نیستید برای بررسی با پشتیبانی سایت تماس بگیرید" />
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CommentBox;
