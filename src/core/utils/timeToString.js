export const timeToString = (date) => {
    let text = ""
  let firstDate = date
    .split("T")[1]
    .split(".")[0].split(":")
    .map((item) => Number(item));
  text = `${firstDate[0]}:${firstDate[1]}` 
  return text
};

