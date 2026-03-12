"use client";
import React, { useState } from 'react'
import { useBookmarks } from "../context/BookMarkContext";
import CardComponent from "../component/CardComponent";
import BookMarkComponent from "../component/BookMarkComponent";
import DetailComponent from "../component/DetailComponent";

export default function BookmarkPage() {
  const { items } = useBookmarks();
  const [isAscending, setIsAscending] = useState(true);
  const [activeItem, setActiveItem] = useState(null);
  const savedItems = items.filter(item => item.saved === true);
  const sortedItems = [...savedItems].sort((a, b) => {
    return isAscending ? a.item_price - b.item_price : b.item_price - a.item_price;
  });

  return (
    <div className="p-10 bg-black min-h-screen text-white">
        <BookMarkComponent setSort={setIsAscending} />
        <div className="flex flex-col gap-4 ">
            {sortedItems.length > 0 ? (
            sortedItems.map((item) => <CardComponent key={item.id} data={item} viewDetails={() => setActiveItem(item)} />)
            ) : (
                <p className="text-gray-400 text-center mt-20">No bookmarks yet.</p>
            )}
        </div>
        
        <DetailComponent item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
}