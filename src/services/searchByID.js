const API_Key="?api_key=b344b08b742e9e8a424653b8b46524ec"

export const searchByID= async (id)=>{
    if (id){
        const URL="https://api.themoviedb.org/3/tv/"+id+API_Key
        const response = await fetch(`${URL}`);
        const data = await response.json();
        return data;
    }
}
