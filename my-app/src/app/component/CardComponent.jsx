"use client"; 
import Image from 'next/image';
import React from 'react';
import {Bookmark} from 'lucide-react'
import { useBookmarks } from "../context/BookMarkContext";
export default function CardComponent({ data, viewDetails }) { 
  
  const { items, toggleBookmark } = useBookmarks();
  const currentItem = items.find(item => item.id === data.id);
  const isSaved = currentItem ? currentItem.saved : false;

  return (
    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-[#1a1d26] transition border  border-gray-800">
      <div className="flex gap-2 items-center ">
        <div className="w-20 h-16 bg-gray-700 rounded-xl  relative overflow-hidden"> 
          <Image src={data.image} alt={data.item_name} fill sizes="64px" className="object-cover" />
        </div>

        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-white font-semibold">
              {data.item_name} 
              <span className="text-gray-400 font-normal ml-2">${data.item_price}</span>
            </h3>
          
            <Bookmark size={18} 
              className={`rotate-180 cursor-pointer transition-colors duration-200 ${ isSaved ? 'text-yellow-600 fill-yellow-600' : 'text-gray-500'
              }`} onClick={() => toggleBookmark(data.id)} />
          </div>
          <p className="text-sm text-gray-500">{data.item_description}</p>
        </div>
      </div>

      <button onClick={viewDetails} 
        className="bg-[#1a1d26] border border-gray-700 px-6 py-2 rounded-lg hover:bg-gray-800 transition text-white text-sm">
        View
      </button>
    </div>
  );
}