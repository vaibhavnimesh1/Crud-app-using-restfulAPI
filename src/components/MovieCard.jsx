import React from 'react'
import { POSTER_IMG_URL } from '../utils/constant'

const MovieCard = ({ID ,posterPath}) => {
  return (
    <div className=' w-36 '>
    
        <img className=' rounded-xl' src={POSTER_IMG_URL+ posterPath} alt=" MovieCard" />
    </div>
  )
}

export default MovieCard