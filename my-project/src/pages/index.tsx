
import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { ProductFeed } from '@/components/ProductFeed'
import { Products } from '@/types/types'
import Head from 'next/head'

interface Props{
  products:Products[]
}

export default function Home({products}:Props) {
  console.log(products)
  return (
   <div className='bg-gray-100'>
    <Head>
      <title>Amazon 2.0</title>
    </Head>
    <Header/>
    <main className='max-w-screen-2xl mx-auto'>
      {/* BANNER */}
      <Banner/> 
      {/* PRODUCTFEED */}
      <ProductFeed products={products}/>
    </main>
   </div>
  )
}

export const  getServerSideProps = async ()=>{
const products = await fetch("https://fakestoreapi.com/products").then(res=>res.json())

return{
  props:{
    products
  }
}
  

}
