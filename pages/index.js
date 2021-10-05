import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import Navbar  from '../components/Navbar'
import EligibilityCheckerPage from '../components/EligibilityCheckerPage'
import RightArrowWhite from '../public/rightarrowWhite.svg'
import RightArrowOrange from '../public/rightarrowOrange.svg'

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-customGrey to-customBlue sm:h-screen">
      <Head>
        <title>Embr</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
      </Head>

      
      <main className=''>
        <div className='block  h-10'>
        <Banner />
        </div>
        <div className='block h-20'>
          <Navbar />
        </div>
     
     <EligibilityCheckerPage />
      </main>

     
    </div>
  )
}
