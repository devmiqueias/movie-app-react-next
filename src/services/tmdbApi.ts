import ListShowsType from '../types/listShows'
import axiosClientTmdb from './axiosClient'

const tmdbApi = {
  getMoviesList: async (networkId: string | string[]) => {
    const url = `discover/tv`
    const {
      data: { results  }
    } = await axiosClientTmdb.get(url, {
      params: { with_networks: networkId }
    }) 
    const list = results
      .filter(item => item.backdrop_path !== null)
      .filter(item => item.poster_path !== null)
      .filter(item => item.overview !== '')
    return list
  },

  getDetail: async (showId: string | string[]) => {
    const url = `tv/${showId}`
    const { data } = await axiosClientTmdb.get(url)
    return data
  },

  getTrailer: async (showId: string | string[]) => {
    const url = `tv/${showId}/videos`
    const {
      data: { results }
    } = await axiosClientTmdb.get(url)
    const trailer = results.filter(item => item.type === 'Trailer')
    return trailer
  }
}

export default tmdbApi
