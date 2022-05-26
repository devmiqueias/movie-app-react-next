import Image from 'next/image'

import { toBase64, shimmer } from '../../utils/shimmerEffect'

import * as S from './styles'

import { posterVariants } from './animate'

type Props = {
  showName: string
  posterPath: string
}

const ShowPoster = ({ showName, posterPath }: Props) => {
  return (
    <S.Container variants={posterVariants}>
      <Image
        className="img"
        alt={`poster ${showName}`}
        src={`https://image.tmdb.org/t/p/original${posterPath}`}
        width={1200}
        height={1500}
        quality={100}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(
          shimmer(1200, 1500)
        )}`}
      />
    </S.Container>
  )
}

export default ShowPoster
