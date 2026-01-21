import React from 'react'

const MovieCard = ({ movie }: { movie: any }) => {
    return (
        <div className='movie-card'>
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `./no-movie.png`} alt="movie poster" />
            <div className='mt-4'>
                <h3 className='text-white'>{movie.title}</h3>


                <div className='content'>
                    <div className='rating'>
                        <img src="./star.svg" alt="rating" />
                        <p>{movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</p>
                    </div>
                    <span>.</span>
                    <p className='lang'>{movie.original_language}</p>
                    <span>.</span>
                    <p className='year'>{movie.release_date ? movie.release_date.split('-')[0] : ''}</p>

                </div>
            </div>
        </div>
    )
}

export default MovieCard