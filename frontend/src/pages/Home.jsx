import {useState} from 'react'
import MovieCard from '../components/MovieCard'

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        { id: 1, poster: "https://example.com/poster1.jpg", title: "Movie 1", releaseDate: "2023-01-01", description: "Description 1" },
        { id: 2, poster: "https://example.com/poster2.jpg", title: "Movie 2", releaseDate: "2023-02-01", description: "Description 2" },
        { id: 3, poster: "https://example.com/poster3.jpg", title: "Movie 3", releaseDate: "2023-03-01", description: "Description 3" },
        { id: 4, poster: "https://example.com/poster4.jpg", title: "Movie 4", releaseDate: "2023-04-01", description: "Description 4" }
    ];
    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    }
    return(
        <div className="home">
            <form onSubmit={handleSearch} className = "search-form">
                <input type="text" placeholder="Search for a movie..."  className = "search-input" value = {searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </form>
            <div className = "movies-grid">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}
export default Home;