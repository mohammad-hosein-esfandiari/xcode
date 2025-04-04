import moment from "moment/moment";

export const dateForCourseCondition = (startDateNum, endDateNum) => {
  let text;
  let startText;
  let endText;
  const today = new Date();
  const date = new Intl.DateTimeFormat().format(today);

  const mmt = moment(startDateNum).utc().format("MM/DD/YYYY");
  const start = new Date(mmt);
  const startedDate = new Intl.DateTimeFormat().format(start);
  const mmt2 = moment(endDateNum).utc().format("MM/DD/YYYY");
  const end = new Date(mmt2);
  const endDate = new Intl.DateTimeFormat().format(end);

  if (today < start) {
    text = "Not Started";
  } else {
    if (today < end || today === start) {
      text = "In Progress";
    } else if (today >= end) {
      text = "Completed";
    }
  }
  startText = startedDate;
  endText = endDate;
  return { text, startText, endText };
};
