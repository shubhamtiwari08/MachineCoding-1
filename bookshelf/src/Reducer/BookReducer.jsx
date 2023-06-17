
export const bookReducer = (state,{type,payload})=>{
    const finalData = state.data
    switch (type){
            case "READ":
                console.log("read")
                console.log(state)
            return {...state,data:finalData.map(item => item.id === payload?{...item,read:"Read"}:{...item})}
            case "CURRENTLY_READING":
            return {...state,data:finalData.map(item => item.id === payload?{...item,read:"currentlyReading"}:{...item})}
            case "WANT_TO_READ":
            return {...state,data:finalData.map(item => item.id === payload?{...item,read:"wantToRead"}:{...item})}
            case "None":
            return {...state,data:finalData.map(item => item.id === payload?{...item,read:"None"}:{...item})}
            case "FILTER":
                console.log("search")
            return {...state,data:finalData.filter(item=> item.title.toLowerCase() === payload)}
            
    }
}