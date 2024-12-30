"use client"
import { ProductDetails } from "@/app/components"
import { useParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
const Page = async () => {
    const {slug}: any  = useParams();
    const products = await client.fetch(groq`*[_type=="product"]`)
    const product = products.find((product: any)=> product.slug.current == slug)
    console.log(product)
  return (
    <div>
        <ProductDetails product={product} />
    </div>
  )
}
export default Page
