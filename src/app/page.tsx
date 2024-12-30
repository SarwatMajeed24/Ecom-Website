// import Image from "next/image";
// import {groq} from "next-sanity"
// import {client} from "@/sanity/lib/client"
// import { Navbar, Hero, Products} from "./components";

// export default async function Home() {
//   const products = await client.fetch(groq`*[_type=="product"]`)
//   console.log(products)
//   return (
//     <>
//     {/* <Navbar /> */}
//     <Hero />
//     <Products />
//     </>
//   );
// }


'use client'

import { useState} from 'react';
import { Hero, Products } from './components';
import {  AppContext } from "./context/AppContext"

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  console.log(showCart);

  return (
    <AppContext.Provider value={{ showCart, setShowCart }}>
      <Hero />
      <Products />
    </AppContext.Provider>
  )
}
