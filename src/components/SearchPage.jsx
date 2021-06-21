import React from 'react';

const SearchPage = ({Results, Click, Toggle}) => {

    return (
        <div className="titleList">
        <div className="title">
          <h1>Results</h1>
          <div className="titles-wrapper">
                {Results.results&&Results.results.map((tv)=>{
                    const imgSrc="https://image.tmdb.org/t/p/w500/"+tv.poster_path;
                    const detailURL="/details/"+tv.id;
                    return ( 
                      <div className="movie">
                        <a href={detailURL} onClick={(e)=>Click(e,tv.id)}
                          ><img src={tv.poster_path===null?"/image-not-available.jpg":imgSrc} alt="Movie poster" />
                          <div className="overlay">
                            <div className="title">{tv.name}</div>
                            <div className="rating">{tv.vote_average}</div>
                            <div className="plot">
                              {tv.overview}
                            </div>
                        </div>
                        </a>
                      <div data-toggled="false" className="listToggle" onClick={(e)=>Toggle(e,tv)}>
                        <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                      </div>
                    </div>
                      );
                })}
            
          </div>
        </div>
      </div>
    )
}
 
export default SearchPage;