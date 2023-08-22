export const dateToString = (date) => {
    let text = ""
  let firstDate = date
    .split("T")[0]
    .split("-")
    .map((item) => Number(item).toLocaleString("fa-IR"));
  firstDate[0] = firstDate[0].split("٬").join("");
  text = firstDate.join('/')
  return text
};

export const dateToDate = ()=>{

}
