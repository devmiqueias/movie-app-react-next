import Image from 'next/image'

import backgroundImg from '../../../public/assets/images/bg.jpg'

import * as S from './styles';

const DefaultBackground = () => {
  return (
    <S.Container>
        <Image
          alt="background"
          src={backgroundImg}
          layout="fill"
          objectFit="cover"
          quality={100}
          placeholder="blur"
        />
        <div />
    </S.Container>
  )
}

export default DefaultBackground;
