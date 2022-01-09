import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HeaderPortfolio } from '../components/Header/header'
import { Presentation } from '../components/Presentation/Presentation'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Meu Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <HeaderPortfolio />
        <Presentation />
      </div>
    </div>
  )
}

export default Home
