import './App.css'
import Hero from './component/Hero'


function App() {
  return (
    <>
      <div>
        <Hero title="Hero" subtitle1="Info laba diena" subtitle="Info Hero" color="blue"/>
        <Hero title="About" subtitle="Info About" color="red"/>
        <Hero title="Contacts" subtitle="Info Contacts" color="blue"/>
        <Hero title="Faq" subtitle="Info Faq" color="red"/>
      </div>
    </>
  )
}

export default App
