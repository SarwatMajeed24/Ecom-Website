import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
const Page = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen text-center">
        <p className="text-[#f4f4f4] font-bold">SUCCESS</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">Your order has been placed! </h1>
        <p className="text-gray-600">Thank you for your purchase!</p>
        <Link href="/" className="mt-10 flex items-center justify-center gap-2 bg-purple-500 font-semibold text-white px-3.5 py-2.5 rounded-md">continue shopping <FaArrowRight /></Link>
    </div>
  )
}
export default Page
