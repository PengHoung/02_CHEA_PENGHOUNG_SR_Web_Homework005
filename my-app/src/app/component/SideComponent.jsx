import React from 'react'

export default function SideComponent() {
  return (
    <div className="bg-[#11141b] w-88 p-3 rounded-2xl ">
        <div className="w-78 h-screen space-y-2 align-center border-gray-900">
            <p className="text-xs uppercase text-gray-500 font-semibold">Menu</p>
            <a href="#" className="block hover:text-white bg-[#1a1d26] p-4 rounded-xl">Overview</a>
            <a href="#" className="block text-white font-medium bg-[#1a1d26] p-4 rounded-xl">Items</a>
            <a href="#" className="block hover:text-white bg-[#1a1d26] p-4 rounded-xl">Orders</a>
            <a href="#" className="block hover:text-white bg-[#1a1d26] p-4 rounded-xl">Customers</a>
            <a href="#" className="block hover:text-white bg-[#1a1d26] p-4 rounded-xl">Settings</a>
        </div>  
    </div>
        
  )
}
