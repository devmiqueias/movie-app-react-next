import TrailerType from '../../types/trailer'

import { MdClose } from 'react-icons/md'

import {
  lottieOpitions,
  traileModalContainerVariants,
  traileModalVariants
} from './animate'

import YouTube from 'react-youtube'

import Lottie from 'react-lottie'

import * as S from './styles'

type Props = {
  trailer: TrailerType | undefined
  setTrailerVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

const TrailerModal = ({ trailer, setTrailerVisibility }: Props) => {
  const valid = trailer !== undefined

  const hideModal = () => setTrailerVisibility(false)

  return (
    <S.Container
      key="trailerModalContainer"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={traileModalContainerVariants}
    >
      <S.Modal
        key="trailerModal"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={traileModalVariants}
      >
        <MdClose className="icon" onClick={hideModal} />
        {valid ? (
          <S.VideoWrapper>
            <YouTube videoId={trailer.key} id={trailer.key} />
          </S.VideoWrapper>
        ) : (
          <>
            <h3>Trailer Don't Found</h3>
            <Lottie options={lottieOpitions} height={400} />
          </>
        )}
      </S.Modal>
    </S.Container>
  )
}

export default TrailerModal
