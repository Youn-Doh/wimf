import { Home } from './Home.tsx'
import Header from './Header.tsx'
import List from './List.tsx'
import { useParams } from 'react-router-dom'

const App = () => {
  const { list } = useParams()
  return (
    <>
      <Header />
      <img className="home-image" src="./client/images/home-image.png" />
      {!list && <Home />}
      {list && <List />}
    </>
  )
}

export default App
