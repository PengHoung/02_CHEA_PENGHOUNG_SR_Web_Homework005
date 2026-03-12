import React from 'react'
import Image from 'next/image';

export default function NavComponent() {
  return (
    <div className="bg-[#0f1117] text-gray-300 flex-col ">
            <header className="h-16 border-b border-gray-800 flex items-center justify-between px-8">
                <div className="flex items-center gap-2 ">
                  <div className="w-10 h-10 bg-gray-500 rounded-full border-2 border-gray-300 overflow-hidden relative"> 
                    <Image src="/pro.jpg" alt="Logo" fill sizes="32px" className="object-cover" />
                  </div>
                  <span className="font-bold text-white">Dashboard</span>
                </div>
                <input type="text" placeholder="Search by item name..." 
                  className="bg-[#1a1d26] border border-gray-700 rounded-md px-4 py-1 text-sm outline-none focus:border-blue-500"/>
            </header>
    </div>
  )
}
