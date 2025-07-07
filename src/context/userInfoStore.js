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
  setUserInfo: (jwt, loginDetails) =>
    set((state) => {
      return {
        userInfo: {
          jwtToken: jwt,
          studentModel: {
            _id: loginDetails.id,
            birthDate: loginDetails.birthDate,
            email: loginDetails.email,
            fullName: loginDetails.fullName,
            isActive: loginDetails.isActive,
            phoneNumber: loginDetails.phoneNumber,
            nationalId: loginDetails.nationalId,
            profile: loginDetails.profile,
            role: loginDetails.role,
            courses: loginDetails.courses,
            resetPasswordExpires: loginDetails.resetPasswordExpires,
            resetPasswordToken: loginDetails.resetPasswordToken,
            __v: loginDetails.__v,
            registerDate: loginDetails.registerDate,
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
