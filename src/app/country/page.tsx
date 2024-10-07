import Link from "next/link";
import countries from "../admin/countries/countries";
export default function Country(){
    return(
       
        <div className="flex flex-col justify-center pt-20 items-center">
            <h2 className="text-5xl mb-10 ">List of Countries</h2>
            <ul className="space-y-4 ">
            {countries.map((country, index) => (
          <li key={index}>
            <Link href={`/country/${country.name.toLowerCase()}`}>
            <span className="text-xl w-48 h-10 bg-red-900 rounded-sm hover:bg-red-700 flex items-center justify-center hover:text-gray-200 active:bg-slate-800 transition-all duration-300 ease-in-out">{country.name}</span>
            </Link>
          </li>
        ))} 
            </ul>
            </div>

    );
}