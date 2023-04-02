import { Helmet } from 'react-helmet'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'

function Home() {
  return (
    <div className='flex flex-col'>
      <Helmet
        title="Home | Hello next.js!"
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
