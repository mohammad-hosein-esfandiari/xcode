import { create } from "zustand";
import { eraseCookie, getCookie } from "@/core/utils/cookies.storage";
const user = getCookie("UoXa-I");
export const useUserInfo = create((set) => ({
  userInfo: {
    jwtToken: "",
    studentModel: {
      _id: "",
      birthDate: "",
      email: "",
      fullName: "",
      isActive: "",
      phoneNumber: "",
      nationalId: "",
      profile: "",
      registerDate: "",
      role: "",
      courses: "",
      resetPasswordExpires: "",
      resetPasswordToken: "",
      __v: "",
      registerDate: "",
    },
  },
  login: false,
  setUserInfo: (jwt, info) =>
    set((state) => {
      return {
        userInfo: {
          jwtToken: jwt,
          studentModel: {
            _id: info._id,
            birthDate: info.birthDate,
            email: info.email,
            fullName: info.fullName,
            isActive: info.isActive,
            phoneNumber: info.phoneNumber,
            nationalId: info.nationalId,
            profile: info.profile,
            registerDate: info.registerDate,
            role: info.role,
            courses: info.courses,
            resetPasswordExpires: info.resetPasswordExpires,
            resetPasswordToken: info.resetPasswordToken,
            __v: info.__v,
            registerDate: info.registerDate,
          },
        },
      };
    }),
  setUserItemObj: (obj) =>
    set((state) => {
      let mergedArr = {};
      let objArray = [{ ...state.userInfo.studentModel }, obj];
      for (let i = 0; i < objArray.length; i++) {
        Object.assign(mergedArr, objArray[i]);
      }
      return {
        userInfo: { ...state.userInfo, studentModel: mergedArr },
      };
    }),
  setUserLogin: () => set({ login: true }),
  setUserLogout: () =>
    set(() => {
      eraseCookie("UoXa-I");
      return {
        userInfo: {
          jwtToken: "",
          studentModel: {
            _id: "",
            birthDate: "",
            email: "",
            fullName: "",
            isActive: "",
            phoneNumber: "",
            nationalId: "",
            profile: "",
            registerDate: "",
            role: "",
            courses: "",
            resetPasswordExpires: "",
            resetPasswordToken: "",
            __v: "",
            registerDate: "",
          },
        },
        login: false,
      };
    }),
}));
