import Content from './components/Content/Content'
import Hero from './components/Hero/Hero'
import Introduction from './components/Introduction/Introduction'
import Header from './components/header/Header'
import './global.scss'

export default function App() {
  return (
    <div className="app">
      <Header/>
      <Hero/>
      <Introduction/>
      <Content/>
    </div>
  )
}


