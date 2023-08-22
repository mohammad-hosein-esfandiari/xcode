
export const convertTopicToObj = (arr)=>{
  let result = []
  let headLineArray = arr.map(item => {
    return {headline:item.split('#')[0].split(':')[1]}
  })
  let detailsArray = arr.map(item => {
    return {details:item.split('#')[1].split('|').map(el=>{
      return el.split(',').flatMap(tl =>{
        return {[tl.split(':')[0]]:tl.split(':')[1]}
      })
    })}
  })
  arr.forEach((item,index) => {
    result.push(Object.assign(headLineArray[index],detailsArray[index]));
  });
  result.forEach(item => {
    item.details = item.details.map(el => {
      return {...el[0],...el[1],...el[2]}
    })
  })
  return result
}




export const convertObjToTopic = (result)=>{
  let res = [];
  let values = result.map((item) => item.details.map(el => Object.values(el)));
  values.forEach(item => {
    res.push(item)
  })
  let newA = res.map(item => {
   return item.map(el =>{
    return [`id:${el[0]}`,`title:${el[1]}`,`video:${el[2]}`].join(',')
   })
  })
let newB = newA.map(item =>{
  return item.join('|')
 })
 let lastRes = newB.map((item,index) => {
  return `headline:${result[index].headline}#${item}`
 })
 return lastRes
}