const  DetailPage = ({Detail}) => {

    console.log(Detail);
    return <>
      <div className="show-details">
        <img src={"https://image.tmdb.org/t/p/original"+Detail.backdrop_path} alt="" />
        <div className="show-details-inner">
          <h1>{Detail.name}</h1>
          <div className="description">
            {Detail.overview}
          </div>
          <button className="add-to-watchlist">+ Add to watch list</button>
        </div>
      </div>
    </>
}
 
export default  DetailPage;