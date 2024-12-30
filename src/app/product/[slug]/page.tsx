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





// "use client"

// import { useParams } from "next/navigation";
// import { ProductDetails } from "../../components"
// import { groq } from "next-sanity";
// import { client } from "@/sanity/lib/client";

// const Page = () => {
//   const { slug }: any = useParams();

//   const fetchProduct = async () => {
//     const products = await client.fetch(groq`*[_type == "product"]`);
//     return products.find((product: any) => product.slug.current == slug);
//   };

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

// "use client";
// /* eslint-disable @next/next/no-async-client-component */
// /* eslint-disable react-hooks/rules-of-hooks */

// import { useParams } from "next/navigation";
// import { ProductDetails } from "../../components";
// import { groq } from "next-sanity";
// import { client } from "@/sanity/lib/client";

// const Page = async () => {
//   const { slug }: any = useParams();
//   const products = await client.fetch(groq`*[_type == "product"]`);
//   const product = products.find((product: any) => product.slug.current == slug);
//   console.log(product);
//   return (
//     <>
//       <ProductDetails product={product} />
//     </>
//   );
// };
// export default Page;
// "use client";
// import { useParams } from "next/navigation";
// import { ProductDetails } from "../../components";
// import { groq } from "next-sanity";
// import { client } from "@/sanity/lib/client";

// const Page = async () => {
//   const { slug }: any = useParams();
//   console.log("Slug:", slug); // Debug slug value

//   const products = await client.fetch(groq`*[_type == "product"]`);
//   console.log("Products:", products); // Debug fetched products

//   const product = products.find((product: any) => product.slug.current === slug);
//   console.log("Product:", product); // Debug matched product

//   if (!product) {
//     return <div>404 - Product Not Found</div>;
//   }

//   return (
//     <>
//       <ProductDetails product={product} />
//     </>
//   );
// };

// export default Page;
"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ProductDetails } from "../../components";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const Page = () => {
  const { slug }: any = useParams(); // Get slug from URL params
  const [product, setProduct] = useState<any>(null); // State to store product
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await client.fetch(groq`*[_type == "product"]`);
        const foundProduct = products.find((prod: any) => prod.slug.current === slug);
        setProduct(foundProduct); // Update state with fetched product
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProduct();
  }, [slug]); // Dependency array ensures the function runs when slug changes

  if (loading) {
    return <p>Loading...</p>; // Show loading state while fetching
  }

  if (!product) {
    return <p>Product not found!</p>; // Handle case when product is not found
  }

  return (
    <>
      <ProductDetails product={product} />
    </>
  );
};

export default Page;

