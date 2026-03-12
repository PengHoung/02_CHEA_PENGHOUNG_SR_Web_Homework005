"use client"
import React, { useState } from 'react'
import CardComponent from './component/CardComponent'
import { items } from './component/DataComponent'
import BookMarkComponent from './component/BookMarkComponent'
import SideComponent from './component/SideComponent'
import DetailComponent from "./component/DetailComponent";

export default function ItemsPage() {
  const [sort, setSort] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const data = handleBookmarkClickSort(sort);
  
  function handleBookmarkClickSort(reverse){
        const newBookmark = [...items].sort((a, b) => a.item_name.localeCompare(b.item_name));
        return reverse ? newBookmark : newBookmark.reverse();
  }

  return (

    <div className="w-full flex pl-0 pr-4 pt-4">
      <SideComponent />      
      <div className="flex-col w-screen ml-2">
         <BookMarkComponent setSort={setSort}/>
        <div className="space-y-4 pl-2 pt-0">
          {data.map((item) => (
            <CardComponent key={item.id} data={item} viewDetails={() => setActiveItem(item)} />
          ))}
        </div>
      </div>
      <DetailComponent item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
}