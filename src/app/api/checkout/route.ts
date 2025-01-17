import {NextResponse} from "next/server"
const stripe = require('stripe')(process.env.NEXT_STRIPE_SECRET_KEY);


export const POST = async (request:any) => {

    const {products} = await request.json();
    let activeProducts = await stripe.products.list({active:true});
     console.log(activeProducts)
   try{
    
    for(const product of products){
        const matchedProducts = activeProducts?.data?.find((stripeProduct:any)=>
        stripeProduct.name.toLowerCase() === product.name.toLowerCase()
        )
        if(matchedProducts == undefined){
            const prod = await stripe.products.create({
                name: product.name,
                default_price_data:{
                    currency:"usd",
                    unit_amount:product.price*100
                }
            })
        }
   }

}catch(error){
    console.log("Error in creating a new product", error);
    throw error;

}
activeProducts = await stripe.products.list({active:true});

let stripeProducts = []
//     {
//       // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//       price: '{{PRICE_ID}}',
//       quantity: 1,
//     },
    
//   ]
for(const product of products){
    const stripeProduct = activeProducts?.data?.find((stripeProduct:any)=>
    stripeProduct.name.toLowerCase() === product.name.toLowerCase()
    );
if(stripeProduct){
    stripeProducts.push(
        {
            price: stripeProduct?.default_price,
            quantity: product.quantity,
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
         
          },
      )
    
}
}


   
    const session = await stripe.checkout.sessions.create({
        line_items: stripeProducts,
        mode: 'payment',
        success_url: `https://localhost:3000/success`,
        cancel_url: `http://localhost:3000/`,
      });
    return NextResponse.json({
        url: session.url
    })
}