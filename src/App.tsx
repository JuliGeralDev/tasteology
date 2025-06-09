import './index.css'
import Home from './pages/Home'
import useLogAnchorClicks from './hooks/useLogAnchorClicks';

const App = () => {
  useLogAnchorClicks();
  return (
    <main className="w-full max-w-[1440px] mx-auto">
      <Home />
    </main>
  )
}

export default App
