"use client"
import Link from "next/link";
import React, { useContext } from "react";
import { FiShoppingBag } from "react-icons/fi";
import Cart from "./Cart";
import { CartContext } from "../context/CardContext";
const Navbar = () => {
  const {totalQuantity, showCart, setShowCart}:any = useContext(CartContext);
 const handleClick = () => {
  setShowCart(!showCart)
 }
  return (
    <>
    <div className="w-full h-[80px] bg-white">    
      <div className="md:max-w-[1024px] max-w-[600px] px-4 md:px-0 m-auto w-full h-full flex justify-between items-center">
            <Link href="/" className="font-urbanist font-black text-2xl">Shop</Link>
            <button className="relative text-[25px]" onClick={handleClick} >
               <FiShoppingBag /> 
               <span className="absolute top-0 text-[12px] right-[-5px] bg-red-500 w-[18px] h-[18px] text-center text-white font-bold">{totalQuantity}</span>
            </button>            
        </div>
    </div>
    {showCart && <Cart />}
  </>
       
  )
}
export default Navbar
