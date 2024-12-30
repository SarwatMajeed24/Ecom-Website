"use client"
import React, { useContext } from "react";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { CartContext } from "../context/CardContext";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  const {cartItems, showCart, setShowCart, totalQuantity, totalPrice, toggleCartItemQty, onRemove}:any = useContext(CartContext);
const handleClose = () => {
  setShowCart(!showCart)
}
const handleCheckout = async () => {
 
  try{ 
    const response = await fetch ("/api/checkout",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({products:cartItems})
  });
  const data =await response.json();
  if(data.url){
    window.location.href = data.url
  }
  }catch(error){
  console.error("Error during checkput", error)
  }
}
  return (
    <div className="w-[100] bg-black bg-opacity-50 fixed right-3">      
        <div className="border h-[100vh] w-[600px] bg-white float-right px-[40px] py-[50px] relative">
            <button className=" text-black md:w-1/2 p-5 text-xl font-bold w-full" onClick={handleClose}>
            <AiOutlineLeft/> 
            <span className="items-center text-[18px] font-[500]">Your Cart</span>
            <span className="ml-[10px] text-[#f02d34]">{totalQuantity}</span>

            </button>
           <div className="mt-[15px] overflow-auto max-h-[70vh] px-[20px] py-[10px]">
            {
              cartItems.map((product:any) =>(
                <div className= "flex mt-[15px] overflow-auto max-h-[70vh] px-[20px] py-[10px] gap-20" key={product._id}>
                  <Image
                      loader = {() => urlForImage(product.images[0]).url()}
                      src = {urlForImage(product.images[0]).url()}
                      alt = {product.images[0]}
                      width = {200}
                      height ={200}
                      className="object-cover"                                
                    />
                    <div className="text-[#324d67]">
                      <div className="space-x-4">
                        <h5 className="font-bold text-xl">{product.name}</h5>
                        <h4 className="font-bold text-xl">{product.price}</h4>
                      </div>
                      <div className="flex item-center mt-8 p-6">
                        <div className="p-2 gap-4 flex border-4 border-black items-center;">
                          <span className="text-red-500" onClick = {() => toggleCartItemQty(product._id,"minus")}>
                            <AiOutlineMinus />
                          </span>
                          <span>
                            {product.quantity}
                          </span>
                          <span className="text-green-500" onClick = {() => toggleCartItemQty(product._id,"plus")}>
                            <AiOutlinePlus />
                          </span>
                        </div>
                          <button type="button"
                          className="bottom-[12px] right-[5px] width-[100%] px-[10px] py-[65px]; text-red-500" onClick= {() => onRemove(product)}>
                            <TiDeleteOutline />

                         </button>
                      </div>

                    </div>
                 </div>

              ))
            }         
           </div>
           {cartItems.length > 0 &&
           <div className="absolute w-full p-[30px] bottom-3 right-[5px]">
              <div className="flex w-full justify-between py-3;">
                <h3>Subtotal</h3>
                <h3>${totalPrice}</h3>
              </div>
              <div className="m-auto">
                <button type="button" onClick={handleCheckout} className="text-black mb-10 p-5 text-xl font-bold w-full border-4 border-black hover:text-white hover:bg-black">
                  Pay with stripe
                </button>                
              </div>
           </div>
           }
           
        </div>
    </div>
  )
}
export default Cart
