import { createContext, useContext } from 'react'

const CinemaContext = createContext(null)

export function useCinema() {
  return useContext(CinemaContext)
}

export default CinemaContext
