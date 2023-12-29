import React from "react"
import Image from 'next/image'
import yellowLogo from "./img/GIVHER_Primary_ElectricYellow.png"

interface ChildComponentProps {
    scrollTo: (sectionId:string) => void;
  }

export default function Navbar({scrollTo}:ChildComponentProps){
    return (
        <header className="flex flex-row justify-between p-5 bg-navySmoke sticky top-0">
            <a href="/">
            <Image
            src={yellowLogo}
            alt="Givher Logo"
            width={50}
            height={24}
            priority
            />
            </a>
            <nav className="flex flex-row space-x-8 font-visbyBold">
                <button onClick={()=>{scrollTo('about')}} className="text-electricYellow">About</button>
                <button onClick={()=>{scrollTo('team')}} className="text-electricYellow">Team</button>
                <button onClick={()=>{scrollTo('contact')}} className="text-electricYellow">Contact</button>
            </nav>
        </header>
    )
}