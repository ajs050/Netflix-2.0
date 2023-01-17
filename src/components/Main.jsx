import axios from 'axios'
import React, { useEffect, useState } from 'react'
import request from '../Request'


export default function Main() {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results)
    })
  }, [])
  console.log(movie)

  return (
    <section className='main__page'>
      <div className='main__movie--wrapper'>
        {/* <div className='movie__overlay'></div> */}
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} className='main__movie--img' />
      </div>
    </section>
  )
}
