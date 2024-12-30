// "use client"
// import { useParams } from "next/navigation";
// import { ProductDetails } from "../../components"
// import { groq } from "next-sanity";
// import { client } from "@/sanity/lib/client";

// const Page = async () => {
//     const { slug }: any  = useParams();
//     const products = await client.fetch(groq `*[_type == "product"]`)
//     const product = products.find((product: any)=> product.slug.current == slug)
//     console.log(product)
//   return (
//     <>
//         <ProductDetails product={product} />
//     </>
//   )
// }
// export default Page

// "use client";
// import { useParams } from "next/navigation";
// import { ProductDetails } from "@/app/components";
// import { useEffect, useState } from "react";
// import { groq } from "next-sanity";
// import { client } from "@/sanity/lib/client";

// const Page = () => {
//   const { slug }: any = useParams();
//   const [product, setProduct] = useState<any>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const products = await client.fetch(groq`*[_type=="product"]`);
//       const foundProduct = products.find((product: any) => product.slug.current === slug);
//       setProduct(foundProduct);
//     };

//     fetchProduct();
//   }, [slug]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <ProductDetails product={product} />
//     </div>
//   );
// };

// export default Page;

// "use client";
// import { useParams } from "next/navigation";
// import { ProductDetails } from "@/app/components";
// import { useEffect, useState } from "react";
// import { groq } from "next-sanity";
// import { client } from "@/sanity/lib/client";

// const Page = () => {
//   const { slug }: any = useParams();
//   const [product, setProduct] = useState<any>(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const products = await client.fetch(groq`*[_type=="product"]`);
//       const foundProduct = products.find((product: any) => product.slug.current === slug);
//       setProduct(foundProduct);
//     };

//     fetchProduct();
//   }, [slug]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <ProductDetails product={product} />
//     </div>
//   );
// };

// export default Page;

"use client";
/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/rules-of-hooks */

import { useParams } from "next/navigation";
import { ProductDetails } from "../../components";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const Page = async () => {
  const { slug }: any = useParams();
  const products = await client.fetch(groq`*[_type == "product"]`);
  const product = products.find((product: any) => product.slug.current == slug);
  console.log(product);
  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};
export default Page;
