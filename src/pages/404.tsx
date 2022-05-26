import DefaultBackground from '../components/DefaultBackground'
import * as S from '../styles/pages/notFound'

const NotFound = () => {
  return (
    <S.Container>
      <DefaultBackground />
      <S.Content>
        <div>
          <h1>
            <span>404</span> | Page not found.
          </h1>
          <p>The page you're looking for is now beyond our reach.</p>
        </div>
      </S.Content>
    </S.Container>
  )
}

export default NotFound
