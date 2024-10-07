import React from "react";
import Link from "next/link";
import countries from "@/app/admin/countries/countries"

function CountryName({ params }: { params: { country_name: string } }) {
    

    const country = countries.find(
        (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
    );
    
    const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    return (
        
        <div className="min-h-screen flex justify-center items-center">
            
       <div>
            <div className="pt-4">
                {country ? (
                    <div className="grid grid-cols-1 gap-y-4 border border-gray-400  p-8 rounded-lg">
                         <div className="flex"><strong className=" text-xl">Country name:</strong> <h1 className="text-2xl text-red-700 text-center">{country.name}</h1></div>
                       <div className="flex"><strong className=" text-xl">Population:</strong><p className="flex items-center text-xl text-red-700 font-bold"> {country.population} </p> </div>
                       <div className="flex"><strong className=" text-xl">Capital:</strong><p className="flex items-center text-xl text-red-700 font-bold"> {capitalizeFirstLetter(country.capital)} </p> </div>
                       <div className="flex justify-center items-center">
                <Link href="/country">
                <button className="bg-red-900 hover:bg-red-700 text-white text-lg py-2 px-4 rounded-sm mt-24 hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out ">Back to Countries</button>
                 </Link>
                
            </div>
                     
                    </div>
                ) : (
                    <div>
                    <p className="text-5xl text-red-700">Country not found</p>
                    <div className="flex justify-center items-center">
                <Link href="/country">
                <button className="bg-red-900 hover:bg-red-700 text-white text-lg py-2 px-4 rounded-sm mt-24 hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out ">Back to Countries</button>
                 </Link>
                
            </div></div>
                    
                )}
            </div>
            
            
            </div>
            </div>
    
    );
}

export default CountryName;