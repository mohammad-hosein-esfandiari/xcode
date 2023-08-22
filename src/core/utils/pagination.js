export const paginationFunc = (limit,page,array)=>{
    let paginatedArray = []
    let endIndex = limit * page
    let startIndex = endIndex - limit
    paginatedArray = array.slice(startIndex,endIndex)
    return {paginatedArray}
}