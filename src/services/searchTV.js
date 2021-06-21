
const baseURL="https://api.themoviedb.org/3/search/tv?api_key=b344b08b742e9e8a424653b8b46524ec&page=1&query="

export const searchTV= async (keyword)=>{
    if (keyword){
        const URL=baseURL+keyword;
        const response = await fetch(`${URL}`);
        const data = await response.json();
        return data;
    }
}

