import ReloadPrompt from './components/ReloadPrompt'
import Globe from 'react-globe.gl'

function App() {

  return (
    <>
      <ReloadPrompt/>
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      />
    </>
  )
}

export default App
