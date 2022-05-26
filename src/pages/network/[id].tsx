import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import tmdbApi from '../../services/tmdbApi'

import ListShowsType from '../../types/listShows'

import * as S from '../../styles/pages/network'
import { containerVariants } from '../../animate/Pages/network'

import NetworkBackground from '../../components/NetworkBackground'
import MovieList from '../../components/MovieList'

type Props = {
  list: ListShowsType[]
}

const Network = ({ list }: Props) => {
  const { asPath } = useRouter()

  return (
    <S.Container
      key={asPath}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <NetworkBackground list={list} />
      <MovieList list={list} />
    </S.Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '19' } },
      { params: { id: '41' } },
      { params: { id: '16' } },
      { params: { id: '88' } },
      { params: { id: '44' } },
      { params: { id: '43' } },
      { params: { id: '64' } },
      { params: { id: '213' } },
      { params: { id: '1024' } },
      { params: { id: '2739' } }
    ],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const list = (await tmdbApi.getMoviesList(params.id)) as ListShowsType[]
  return {
    props: {
      list: list
    }
  }
}

export default Network
