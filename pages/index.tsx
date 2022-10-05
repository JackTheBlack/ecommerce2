import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ItemContainer from './components/itemContainer'
import NavBar from './components/navbar'
import Parallaximg from './components/parallax'
import ProductContainer from './components/productContainer'
import Slider from './components/slider'
import Link from "next/link"



export default function Home() {
  return (
    <>
    <header>
    <NavBar/>
    </header>
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
     
      </Head>
      <div>
          <Slider/>
        </div>
    
     
        <div>
          <ProductContainer type="TOPES" />
        </div>
      
        <div>
         <Parallaximg section="Indumentaria" img="https://games-assets.crossfit.com/s3fs-public/inline-images/Agustin%20Richlme.JPG" />
        </div>
        <div>
          <ProductContainer  type="DISCOS"/>
        </div>
        
        <div>
         <Parallaximg  section="Atletas" img="https://aadeporte.com.ar/wp-content/uploads/2022/09/tatiana-ullua.jpg" />
        </div>
        

     

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
    </>
  )
}
