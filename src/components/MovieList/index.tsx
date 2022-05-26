import { useRef, WheelEvent } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import ListShowsType from '../../types/listShows'

import { toBase64, shimmer } from '../../utils/shimmerEffect'

import { listItemVariants, listVariants } from './animate'

import * as S from './styles'

type Props = {
  list: ListShowsType[]
}

const MovieList = ({ list }: Props) => {
  const scrollRef = useRef(null)

  const scrollList = (e: WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      scrollRef.current.scrollBy(1000, 0)
    } else {
      scrollRef.current.scrollBy(-1000, 0)
    }
  }

  return (
    <S.Container>
      <S.List variants={listVariants} onWheel={scrollList} ref={scrollRef}>
        {list.map(item => (
          <S.Item key={item.id} variants={listItemVariants}>
            <Link href={`/show/${item.id}`}>
              <a>
                <Image
                  className="img"
                  alt={`poster ${item.name}`}
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  width={525}
                  height={705}
                  quality={100}
                  loading="eager"
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(525, 705)
                  )}`}
                />
              </a>
            </Link>
          </S.Item>
        ))}
      </S.List>
    </S.Container>
  )
}

export default MovieList
