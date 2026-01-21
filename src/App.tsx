import { useEffect, useState } from "react"
import Search from "./components/search"
import { Loader } from "./components/loader"
import MovieCard from "./components/movieCard"
import { useDebounce } from "react-use"


const apiKey: string = import.meta.env.VITE_TMDB_API_KEY





const App = () => {
  // states
  const [searchTerm, setSearchTerm] = useState("")
  const [error, setError] = useState('')
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [deBounceSearch, setDebounceSearch] = useState('')



  // debouncing the search
  useDebounce(()=>setDebounceSearch(searchTerm),500,[searchTerm])



  const fetchMovies = async (query: string = '') => {
    setLoading(true)
    setError('')
    try {
      // api preperation
      const API_BASE_URL = query
        ? "https://api.themoviedb.org/3/search/movie"
        : "https://api.themoviedb.org/3/discover/movie";

      const url = new URL(API_BASE_URL);
      url.searchParams.append('language', 'en-US');

      if (query) {
        url.searchParams.append('query', query);
      } else {
        url.searchParams.append('sort_by', 'popularity.desc');
      }

      const endpoint = url.toString();

      const apiOptions: RequestInit = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      };



      // api call
      const response: Response = await fetch(endpoint, apiOptions)

      if (!response.ok) {
        throw new Error(`Error fetching movies: ${response.statusText}`)
      }
      const data: any = await response.json()

      if (data.Response == 'False') {
        setError(data.Error)
        setMovies([])
        // setLoading(false)
        return
      }

      setMovies(data.results || [])
      // setLoading(false)
    } catch (error) {
      console.log(`Error fetching movies: ${error}`)
      setError(`Error fetching movies: ${error}`)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchMovies(deBounceSearch)
  }, [deBounceSearch])
  return (
    <main>

      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./logo.png" alt="logo" className="size-16 mb-10" />
          <img src="./hero.png" alt="hero-bg" />
          <h1>Watch <span className="text-gradient">Movies</span> You'll enjoy without hassel</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>


        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>
          {loading ? (<p className="text-white text-center"> <Loader /></p>) : error ? (<p className="text-red-500"> {error}</p>) : (<ul> {movies.map((movie: any) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}</ul>)}
        </section>


      </div>
    </main>
  )
}

export default App