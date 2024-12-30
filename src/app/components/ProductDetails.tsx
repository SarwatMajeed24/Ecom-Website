"use client"
import { urlForImage } from "@/sanity/lib/image"
import Image from "next/image"
import { useContext, useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { CartContext } from "../context/CardContext"


const ProductDetails = ({product}: any) => {
    const [index, setIndex] = useState(0);
    const {cartItems, addProduct, qty, decQty, incQty}:any = useContext(CartContext)
   // console.log(cartItems)
  return (
    <div className='w-full md:py-16'>
        <div className='flex gap-[5px] justify-center'>
            <div>
                <div className="h-[450px] flex items-center mb-[25px]">
                    <Image
                      loader = {() => urlForImage(product.images[index]).url()}
                      src = {urlForImage(product.images[index]).url()}
                      alt = {product.images[index]}
                      width = {350}
                      height ={350}
                      className="object-cover mx-auto"                                
                    />
                </div>
                <div className="flex gap-[5px] justify-center">
                    {product.images?.map((item:any,i:number)=>(
                          <Image
                          loader = {() => urlForImage(product.images[i]).url()}
                          src = {urlForImage(product.images[i]).url()}
                          alt = {product.images[0]}
                          width = {220}
                          height ={100}
                          className="object-cover mx-auto h-32 border rounded-xlhover:cursor-pointer"  
                          onClick={()=> setIndex(i)}                              
                        />
                    ))}
                </div>
            </div>
             <div className="flex flex-col gap-8 md:pt-32 pt-0">
                <div className="flex flex-col gap-4">
                    <div className="text-3xl font-bold">{product.name}</div>
                    <div className="text-xl font-medium">{product.price}</div>
                </div>
                <div className="flex gap-2 items-center">
                   
                    <h3>Quantity</h3>
                    <p className="text-[16px] cursor-pointer px-[32px] py-[6px] space-x-4 flex items-center border border-black">
                        <span className="text-red-500"
                        onClick={decQty}>

                        <AiOutlineMinus /> 
                        </span>
                        <span className="text-black text-[20px]">{qty}</span>
                        <span className="text-green-500"
                        onClick = {incQty}>
                        <AiOutlinePlus/> 
                        </span>
                    </p>
                </div >    
               
                <button className="text-black md:px-5 md:py-3 px-2 py-1 text-xl border box-border border-gray-900 hover:bg-black hover:text-white"
                onClick={()=> addProduct(product,qty)}
                >
                        Add To Cart
                    </button> 
               
             </div>
        </div>
    </div>
  )
}
export default ProductDetails
