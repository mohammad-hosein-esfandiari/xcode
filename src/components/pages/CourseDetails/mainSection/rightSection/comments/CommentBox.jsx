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
    <div className="w-full h-full">
      {!IsUserLoggedIn && <LoginComment />}

      <ul className="py-4">
        <li className="w-full h-full">
          <ul className="flex flex-col">
            <li>
              <h2 className="xs:text-[25px] ss:text-[40px] text-mode-color text-[18px]">
                Comments
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
                      userId={user._id}
                    />
                  </>
                )}
              </>
            )}
            {IsUserLoggedIn && !user.studentModel.isActive && (
              <InActiveCp text="You have been disabled by the site administrator and are unable to post comments. Contact site support to review." />
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CommentBox;
