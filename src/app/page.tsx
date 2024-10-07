import Link from "next/link"

export default function Home(){
    return(
        <div className="flex flex-col gap-y-20 h-screen justify-center items-center">
           <div className=" flex justify-center items-center"> <p className="text-7xl">Countries Information</p></div>
        
            <Link href="/country">
            <button className="bg-red-900 hover:bg-red-700 text-white py-2 px-4 rounded-sm hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out">View Countries</button>
            </Link>   
          
        </div>
    )
}