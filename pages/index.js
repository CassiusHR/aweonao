import Head from 'next/head'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import {motion, AnimatePresence} from 'framer-motion'
import styles from '../styles/Home.module.css'

const phrases = [
  'Feliz cumpleaños aweonao',
  'Feliz cumpleaños bb',
  'Happy birthday Mr. Cito',
  'Tuo weno el cumpleaños',
  'Buen día pa nacer mi niño',
  'This day, we were given a Cito',
  'TAI ENTERO VIEJO JAJAJAJ',
  'Te acordai cuando erai joven?',
  'Su midweek de cumpleaños',
  'Tamo como la wea porque no hay minah',
]



export default function Home() {
  const [phrase,setPhrase] = useState('Feliz cumpleaños aweonao')
  const phrasesHandler = (arr)=>{
    setPhrase(arr[Math.floor(Math.random()*arr.length)])
  }
  useEffect(()=>{
    setInterval(()=>{
      phrasesHandler(phrases)
    },3000)
  },[])
  return (
    <div className={styles.container} style={{background:'url(/bg1.jpg) center center /cover'}}>
      <Head>
        <title>Feliz cumpleaños mi panini</title>
        <meta name="description" content="hecho con el kokoro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <AnimatePresence exitBeforeEnter>
          <motion.h1 initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className={styles.title} key={phrase}>
            {phrase}
          </motion.h1>
        </AnimatePresence>
      </main>
    </div>
  )
}
