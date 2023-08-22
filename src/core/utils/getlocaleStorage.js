export const getLocaleStorage = (name) => {
  if (typeof window !== "undefined") {
    const obj = localStorage.getItem(name);
    if (obj) {
      return JSON.parse(obj);
    } else {
      return undefined;
    }
  }
};
