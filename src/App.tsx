import ColorSection from "./features/colorSection/ColorSection"
import CookingSection from "./features/cookingSection/CookingSection"

import './index.css'


const App = () => {

  return (
    <main className="w-full max-w-[1440px] mx-auto">
      <CookingSection />
      <ColorSection />
    </main>
  )
}

export default App
