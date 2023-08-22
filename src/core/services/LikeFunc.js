import api from "../interceptors/apiInterceptor";

export const likeFunc = async (obj, setLikeCountNum, setIslike) => {
  try {
    const res = await api.post("/course/like", obj);
    console.log(res);
    if (res.data.result == "Done") {
      setLikeCountNum((prev) => prev - 1);
      setIslike(false);
    } else {
      setLikeCountNum((prev) => prev + 1);
      setIslike(true);
    }
  } catch (error) {
    console.log(error);
  }
};
export const disLikeFunc = async (obj, setDisLikeCountNum,setDisIslike) => {
  try {
    const res = await api.post("/course/dislike", obj);
    console.log(res);
    if (res.data.result == "Done") {
      setDisLikeCountNum((prev) => prev - 1);
      setDisIslike(false)
    } else {
      setDisLikeCountNum((prev) => prev + 1);
      setDisIslike(true)
    }
  } catch (error) {
    console.log(error);
  }
};
