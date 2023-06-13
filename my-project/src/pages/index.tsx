
import { Header } from '@/components/Header'
import { Inter } from 'next/font/google'
import Head from 'next/head'

export default function Home() {
  return (
   <div>
    <Head>
      <title>Amazon 2.0</title>
    </Head>
    <Header/>
    <main className='max-w-screen-2xl'>
      {/* BANNER */}

    </main>
   </div>
  )
}
