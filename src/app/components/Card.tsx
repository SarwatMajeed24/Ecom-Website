import Link from "next/link"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
const Card = ({product}:any) => {
  return (
    <div>
               <Link href={`/product/${product.slug.current}`}>
                     <div className="bg-white pt-10 drop-shadow-md rounded-lg over-flow-hidden">
                        <Image 
                            src={urlForImage(product.images && product.images[0]).url()}
                            alt={product.slug}
                            width={200}
                            height={100}
                            className="object-cover h-32 mx-auto"
                         />
                         <div className="text-center py-10">
                            <h1 className="text-2xl font-bold">{product.name}</h1>
                            <h1 className="text-xl text-gray-500 font-bold ">${product.price}</h1>
                         </div>         
                     </div>                    
                    </Link>  
    </div>
  )
}
export default Card
