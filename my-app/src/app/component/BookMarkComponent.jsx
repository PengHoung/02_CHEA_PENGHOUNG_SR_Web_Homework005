"use client"
import React, { useState } from 'react'
import {ArrowDownZa, ArrowUpAZ, BookMarked} from 'lucide-react'
import Link from 'next/link';
export default function BookMarkComponent({setSort}) {
  return (
    <div className="flex justify-between items-center mb-6">
        <Link href="/">
          <button className="bg-white text-black px-4 py-1 rounded-full cursor-pointer text-sm font-bold">Back</button>
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/bookmark" className="flex items-center gap-2 hover:text-yellow-600 transition-colors cursor-pointer">
              <span>Your Bookmark</span>
              <BookMarked size={18}  />
            </Link>
            <ArrowDownZa size={24} className="rotate-180 hover:text-amber-600 cursor-pointer" onClick={() => setSort(true)} />
            <ArrowUpAZ size={24} className="rotate-180 hover:text-amber-600 cursor-pointer" onClick={() => setSort(false)} />
        </div>
      </div>
  )
}
