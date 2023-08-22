let pattern = "id:(java);title:(javascript);category:(riazi)-text:[(hello js)*(ooof)],img:(js.png)|id:(react);category:(olom)-img:(react.png),box:(byby),text:(what are you doing),numberList:[season1*season2*season3],bolletList:[title=(hi);text=(helo)*title=(hiiiii);text=(hefflo)*title=(hi);text=(helo)]"
let sample = "id:java;title:javascript;category:riazi-text:hello js*ooof,img:js.png|id:react;category:olom-text:what are you doing,img:react.png,box:byby,numberList:season1*season2*season3,bolletList:title=hi;text=helo*title=hiiiii;text=hefflo*title=hi;text=helo"


export const textToObjectBlogs = (text) => {
  // get news
  // get news
  let array = text.split('|')
  let result = []
  let array2 = array.map(item => item.split('-')[0])
  let subjectArray = array2.map(item=>{
    let key = item.split(';').map(item => {
      return {
        [item.split(':')[0]]:item.split(':')[1]
      }
    })
    return key 
  })
  let subjectObj = subjectArray.map(item => Object.assign(...item))
  let array3 = array.map(item => item.split('-')[1])
  let detailsArray = array3.map(item => {
    let key = item.split(',').map(item => {
      return {
        [item.split(':')[0]]:item.split(':')[1]
      }
    })
    return key 
  })
  let detailsObj = detailsArray.map(item => Object.assign(...item))
  detailsObj.forEach((item,index) => {
    let key = Object.keys(item)
    if(key.includes('text')){

      item.text = item.text.split('*')
    }
    if(key.includes('numberList')){
      item.numberList = item.numberList.split('*')
    }
    if(key.includes('bolletList')){
      let a = item.bolletList.split('*')
      let b = a.map(item => item.split(';').map(item => {

        return {
          [item.split('=')[0]]:item.split('=')[1]
        }
      }) )
      let c = b.map(item => Object.assign(...item))
      item.bolletList = c
    }
  })

  let newObj = subjectObj.map((item,index) => ({...item,details:detailsObj[index]}))
  return newObj;
};

export const objectToTextBlogs = (newObj) => {
  // send news
  let arr = [];
  let obj = [];
  let values = newObj.map((item) => Object.values(item));
  let keys = newObj.map((item) => Object.keys(item));
  let newTextObj = keys.map((item, num) => {
    let key = item.map((el, index) => {
      return `${el}:${values[num][index]}`;
    });
    return key;
  });
  newTextObj.forEach((item) => {
    let findIndex = item.findIndex((el) => el.includes("details"));
    let spliceArray = item.splice(0, findIndex).join(";");
    let newArray = [spliceArray, item[0]];
    arr.push(newArray);
  });
  let newarr = arr.map((item) => item[1].split(":"));

  let detailsText = newObj.map((item) => item.details);
  let detailsValue = newObj.map((item) => Object.values(item));
  detailsValue.forEach((item, index) => {
    let key = Object.keys(item[item.length - 1]);
    let value = Object.values(item[item.length - 1]);
    if (key.includes("numberList")) {
      let indexKey = key.findIndex((el) => el === "numberList");
      value[indexKey] = value[indexKey].join("*");
    }
    if (key.includes("bolletList")) {
      let indexKey = key.findIndex((el) => el === "bolletList");

      let values = value[indexKey].map((item) => Object.values(item));
      let keys = value[indexKey].map((item) => Object.keys(item));
      let newTextObj = keys.map((item, num) => {
        let key = item.map((el, index) => {
          return `${el}=${values[num][index]}`;
        });
        return key;
      });
      let a = newTextObj.map((item) => item.join(";")).join("*");
      value[indexKey] = a;
    }
    let arr = key.map((item, index) => {
      return [
        `${item}:${item === "text" ? value[index].join("*") : value[index]}`,
      ].join("");
    });
    let lastOne = arr.join(",");
    obj.push(lastOne);
  });
  arr.forEach((item,index) => {
    item[1]=`${obj[index]}`
  })
  let theEnd = arr.map(item => item.join('-')).join('|')
  return theEnd
};
