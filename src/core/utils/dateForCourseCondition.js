import moment from "moment/moment";

export const dateForCourseCondition = (startDateNum, endDateNum) => {
  let text;
  let startText;
  let endText;
  const today = new Date();
  const date = new Intl.DateTimeFormat("fa-IR").format(today);

  const mmt = moment(startDateNum).utc().format("MM/DD/YYYY");
  const start = new Date(mmt);
  const startedDate = new Intl.DateTimeFormat("fa-IR").format(start);
  const mmt2 = moment(endDateNum).utc().format("MM/DD/YYYY");
  const end = new Date(mmt2);
  const endDate = new Intl.DateTimeFormat("fa-IR").format(end);

  if (today < start) {
    text = "شروع نشده";
  } else {
    if (today < end || today === start) {
      text = "در حال برگزاری";
    } else if (today >= end) {
      text = "به اتمام رسیده";
    }
  }
  startText = startedDate;
  endText = endDate;
  return { text, startText, endText };
};
