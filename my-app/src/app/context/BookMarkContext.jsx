"use client";
import { createContext, useContext, useState } from "react";
import { items as initialItems } from "../component/DataComponent";
const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [items, setItems] = useState(initialItems);

  const toggleBookmark = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, saved: !item.saved } : item
      )
    );
  };

  return (
    <BookmarkContext.Provider value={{ items, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmarks = () => useContext(BookmarkContext);