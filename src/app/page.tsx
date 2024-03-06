'use client'
import Image from "next/image";
import { Component } from "@/components/component/component"
import Navbar from "@/components/ui/Navbar"

export default function Home() {
  return (
    <main className=" md:bg-green-500 lg:bg-yellow-500 xl:bg-red-500 ">
     
      <div className=''>

          <Component/>
          
      </div>


    </main>
  );
}
