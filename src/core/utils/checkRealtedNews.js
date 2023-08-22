export const checkRelatedNews = (id,array)=>{
    const postIndex = array.findIndex(item => item._id === id);
    let nextText 
    let nextId 
    let prevText 
    let prevId 
    if(postIndex === 0 ){
        prevText = array[array.length - 1].title.split('|')[0]
        prevId = array[array.length - 1]._id
        nextId =array[postIndex+1]._id
        nextText = array[postIndex+1].title.split('|')[0]
    }else if(postIndex === array.length - 1){
        nextText = array[0].title.split('|')[0]
        nextId = array[0]._id
        prevId = array[postIndex-1]._id
        prevText =array[postIndex-1].title.split('|')[0]
    }else{
         nextText = array[postIndex+1].title.split('|')[0]
         nextId =array[postIndex+1]._id
        prevText =array[postIndex-1].title.split('|')[0]
         prevId = array[postIndex-1]._id
    }
    return {nextText,nextId,prevId,prevText}
}