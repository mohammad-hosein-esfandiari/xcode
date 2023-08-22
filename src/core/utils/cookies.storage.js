export const setCookie = (name, value, days) => {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie =
    name + "=" + (JSON.stringify(value) || "") + expires + "; path=/";
};

export const getCookie = (name, cookies) => {
  if (typeof window !== "undefined") {
  var nameEQ = name + "=";
  var ca = cookies ? cookies.split(";") : document?.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0)
      return JSON.parse(c.substring(nameEQ.length, c.length));
  }
  return undefined;
}
};

export const eraseCookie = (name) => {
  setCookie("UoXa-I",'')
  // document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
