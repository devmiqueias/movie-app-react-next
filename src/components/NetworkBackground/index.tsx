import { useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import ListShowsType from '../../types/listShows'

import { toBase64, shimmer } from '../../utils/shimmerEffect'

import * as S from './styles'

import {
  backgroundImgVariants,
  overviewVariants,
  titleVariants
} from './animate'
import { motion } from 'framer-motion'

import Button from '../Button'

type Props = {
  list: ListShowsType[]
}

const NetworkBackground = ({ list }: Props) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const timeChange = 8000

  useEffect(() => {
    let index = 0

    const timerChanger = setInterval(() => {
      index >= list.length - 1 ? (index = 0) : index++
      setCurrentItemIndex(index)
    }, timeChange)

    return () => {
      clearInterval(timerChanger)
    }
  }, [])

  return (
    <S.Container>
      {list.map(
        (item, index) =>
          index === currentItemIndex && (
            <S.Slider key={index + `${item.id}` + 'slider'}>
              <S.Background>
                <S.BackgroundImg variants={backgroundImgVariants}>
                  <Image
                    alt="background"
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(705, 525)
                    )}`}
                  />
                </S.BackgroundImg>
              </S.Background>
              <S.Gradient>
                <div />
              </S.Gradient>
              <S.Content>
                <motion.h1 variants={titleVariants}>{item.name}</motion.h1>
                <motion.p variants={overviewVariants}>{item.overview}</motion.p>
                <Link href={`/show/${item.id}`}>
                  <a>
                    <Button>See More</Button>
                  </a>
                </Link>
              </S.Content>
            </S.Slider>
          )
      )}
    </S.Container>
  )
}

export default NetworkBackground
