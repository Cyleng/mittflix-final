const baseURL="https://api.themoviedb.org/3/discover/tv?api_key=b344b08b742e9e8a424653b8b46524ec&sort_by=popularity.desc&page=1&watch_region=CA&with_watch_providers="

const getTV= async (id)=>{
    if (id){
        const URL=baseURL+id;
        const response = await fetch(`${URL}`);
        const data = await response.json();
        return data;
    }
}

export const getAll = async ()=>{
    const tvArray=await Promise.all([getTV(8),getTV(230),getTV(337),getTV(350)]);

    return tvArray;
}