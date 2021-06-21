const  MainPage = ({TVs, Click, Toggle}) => {

    return <>
    <div className="titleList">
        <div className="title">
            <h1>Netflix</h1>
            <div className="titles-wrapper">
                {TVs[0]&&TVs[0].results.map((tv)=>{
                    const imgSrc="https://image.tmdb.org/t/p/w500/"+tv.poster_path;
                    const detailURL="/details/"+tv.id;
                    return ( 
                      <div className="movie">
                        <a href={detailURL}  onClick={(e)=>Click(e,tv.id)}
                          ><img src={tv.poster_path===null?"/image-not-available.jpg":imgSrc} alt="Movie poster" />
                          <div className="overlay">
                            <div className="title">{tv.name}</div>
                            <div className="rating">{tv.vote_average}</div>
                            <div className="plot">
                              {tv.overview}
                            </div>
                        </div>
                        </a>
                      <div data-toggled="false" className="listToggle"  onClick={(e)=>Toggle(e,tv)}>
                        <div><i className="fa fa-fw fa-plus" ></i><i className="fa fa-fw fa-check"></i></div>
                      </div>
                    </div>
                      );
                })}
            </div>
        </div>
    </div>

    <div className="titleList">
        <div className="title">
            <h1>Crave</h1>
            <div className="titles-wrapper">
            {TVs[1]&&TVs[1].results.map((tv)=>{
                    const imgSrc="https://image.tmdb.org/t/p/w500/"+tv.poster_path;
                    const detailURL="/details/"+tv.id;
                    return ( 
                      <div className="movie">
                        <a href={detailURL}  onClick={(e)=>Click(e,tv.id)}
                          ><img src={tv.poster_path===null?"/image-not-available.jpg":imgSrc} alt="Movie poster" />
                          <div className="overlay">
                            <div className="title">{tv.name}</div>
                            <div className="rating">{tv.vote_average}</div>
                            <div className="plot">
                              {tv.overview}
                            </div>
                        </div>
                        </a>
                      <div data-toggled="false" className="listToggle"  onClick={(e)=>Toggle(e,tv)}>
                        <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                      </div>
                    </div>
                      );
                })}
            </div>
        </div>
    </div>

    <div className="titleList">
        <div className="title">
            <h1>Disney</h1>
            <div className="titles-wrapper">
            {TVs[2]&&TVs[2].results.map((tv)=>{
                    const imgSrc="https://image.tmdb.org/t/p/w500/"+tv.poster_path;
                    const detailURL="/details/"+tv.id;
                    return ( 
                      <div className="movie">
                        <a href={detailURL}  onClick={(e)=>Click(e,tv.id)}
                          ><img src={tv.poster_path===null?"/image-not-available.jpg":imgSrc} alt="Movie poster" />
                          <div className="overlay">
                            <div className="title">{tv.name}</div>
                            <div className="rating">{tv.vote_average}</div>
                            <div className="plot">
                              {tv.overview}
                            </div>
                        </div>
                        </a>
                      <div data-toggled="false" className="listToggle"  onClick={(e)=>Toggle(e,tv)}>
                        <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                      </div>
                    </div>
                      );
                })}
            </div>
        </div>
    </div>

    <div className="titleList">
        <div className="title">
            <h1>Apple Plus</h1>
            <div className="titles-wrapper">
            {TVs[3]&&TVs[3].results.map((tv)=>{
                    const imgSrc="https://image.tmdb.org/t/p/w500/"+tv.poster_path;
                    const detailURL="/details/"+tv.id;
                    return ( 
                      <div className="movie">
                        <a href={detailURL}  onClick={(e)=>Click(e,tv.id)}
                          ><img src={tv.poster_path===null?"/image-not-available.jpg":imgSrc} alt="Movie poster" />
                          <div className="overlay">
                            <div className="title">{tv.name}</div>
                            <div className="rating">{tv.vote_average}</div>
                            <div className="plot">
                              {tv.overview}
                            </div>
                        </div>
                        </a>
                      <div data-toggled="false" className="listToggle"  onClick={(e)=>Toggle(e,tv)}>
                        <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                      </div>
                    </div>
                      );
                })}
            </div>
        </div>
    </div>
    
    </>
}

export default  MainPage;