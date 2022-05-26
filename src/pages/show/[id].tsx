import { useState } from 'react'

import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import tmdbApi from '../../services/tmdbApi'

import TrailerType from '../../types/trailer'
import ShowType from '../../types/show'

import { MdPlayCircleOutline } from 'react-icons/md'

import * as S from '../../styles/pages/show'

import { AnimatePresence } from 'framer-motion'
import {
  containerVariants,
  sinopseVariants,
  titleVariants
} from '../../animate/Pages/show'

import Infos from '../../components/Infos'
import Genres from '../../components/Genres'
import Button from '../../components/Button'
import Loader from '../../components/Loader'
import ShowPoster from '../../components/ShowPoster'
import TrailerModal from '../../components/TrailerModal'
import ShowBackground from '../../components/ShowBackground'

type Props = {
  show: ShowType
  trailer: TrailerType[]
}

const Show = ({ show, trailer }: Props) => {
  const [trailerVisibility, setTrailerVisibility] = useState(false)

  const { isFallback, asPath } = useRouter()

  if (isFallback) {
    return <Loader />
  }

  return (
    <S.Container
      key={asPath}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
    >
      <ShowBackground backdropPath={show.backdrop_path} />
      <S.Content>
        <S.Title variants={titleVariants}>{show.name}</S.Title>
        <ShowPoster showName={show.name} posterPath={show.poster_path} />
        <S.Sinopse variants={sinopseVariants}>{show.overview}</S.Sinopse>
        <Genres genres={show.genres} />
        <Infos
          voteAverage={show.vote_average}
          numberOfSeasons={show.number_of_seasons}
          firstSirDate={show.first_air_date}
        />
        <Button className="btn" onClick={e => setTrailerVisibility(true)}>
          <MdPlayCircleOutline />
          <span>Play Trailer</span>
        </Button>
      </S.Content>
      <AnimatePresence>
        {trailerVisibility && (
          <TrailerModal
            trailer={trailer[0]}
            setTrailerVisibility={setTrailerVisibility}
          />
        )}
      </AnimatePresence>
    </S.Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const show = (await tmdbApi.getDetail(params.id)) as ShowType
  const trailer = (await tmdbApi.getTrailer(params.id)) as TrailerType[]
  return {
    props: {
      show: show,
      trailer: trailer
    }
  }
}

export default Show
