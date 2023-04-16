import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

function Home() {
  return (
    <div className='flex flex-col'>
      <Helmet
        title="俄罗斯卖家资源导航"
        meta={[{ property: 'og:title', content: 'Home' }]}
      />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home

// import Card from "./Card";
