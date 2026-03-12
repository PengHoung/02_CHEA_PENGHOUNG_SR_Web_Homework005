"use client";
import React from 'react';

export default function DetailComponent({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1d26] border border-gray-800 w-full max-w-md rounded-2xl p-6 shadow-2xl relative">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Item Details</h2>
          <button onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
            Close
          </button>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex">
            <span className="text-gray-500 font-semibold w-24">ID:</span>
            <span className="text-white">{item.id}</span>
          </div>
          
          <div className="flex">
            <span className="text-gray-500 font-semibold w-24">Name:</span>
            <span className="text-white">{item.item_name}</span>
          </div>

          <div className="flex">
            <span className="text-gray-500 font-semibold w-24">Price:</span>
            <span className="text-white">${item.item_price}</span>
          </div>

          <div className="pt-2">
            <span className="text-gray-500 font-semibold block mb-2">Description:</span>
            <p className="text-gray-300 bg-[#0f1117] p-3 rounded-lg border border-gray-800">
              {item.item_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}