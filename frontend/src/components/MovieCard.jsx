

function MovieCard({movie}){

    function onFavouriteClick() {
        alert("favourite clicked")
    }

    return(
        <div className="movie-card">
            <div className = "movie-poster">
                <img src={movie.poster} alt={movie.title}/>
                <div className = "movie-overlay">
                    <button className="favourite-btn" onClick = {onFavouriteClick}>💗</button>
                </div>
            </div>
            <div className = "movie-info">
                <h2>{movie.title}</h2>
                <h3>{movie.releaseDate}</h3>
                <p>{movie.description}</p>
            </div>
        </div>
    )
}

export default MovieCard;