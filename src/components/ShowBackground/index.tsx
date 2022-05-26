import Image from 'next/image'

import { toBase64, shimmer } from '../../utils/shimmerEffect'

import * as S from './styles'

type Props = {
  backdropPath: string
}
const ShowBackground = ({ backdropPath }: Props) => {
  return (
    <S.Container>
      <Image
        alt="image background"
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        layout="fill"
        objectFit="cover"
        quality={100}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(705, 525))}`}
      />
      <S.Overlay />
      <S.Gradient />
    </S.Container>
  )
}

export default ShowBackground
