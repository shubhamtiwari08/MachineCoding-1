
export const bookReducer = (state,{type,payload})=>{
    switch (type){
            case "READ":
            return {...state,data:[state.data].map(item => item.id === payload?{...item,read:"Read"}:{...item})}
            case "CURRENTLY_READING":
            return {...state,data:[state.data].map(item => item.id === payload?{...item,read:"currentlyReading"}:{...item})}
            case "WANT_TO_READ":
            return {...state,data:[state.data].map(item => item.id === payload?{...item,read:"wantToRead"}:{...item})}
            case "None":
            return {...state,data:[state.data].map(item => item.id === payload?{...item,read:"None"}:{...item})}
            case "FILTER":
                console.log("search")
            return {...state,data:state.data.filter(item=> item.title.toLowerCase() === payload)}
            
    }
}