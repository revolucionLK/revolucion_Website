import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const TopBar = () => {
  return (
    <header className="h-16 bg-black/90 shadow-md flex items-center justify-between px-6">
      <div className="flex items-center flex-1">
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg bg-white/10 border border-gray-600 text-white focus:outline-none focus:border-secondary"
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-400 hover:text-secondary">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-2">
          <img
            src="/assets/images/1.png"
            alt="Profile"
            className="h-8 w-8 rounded-full border-2 border-secondary"
          />
          <span className="text-white">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default TopBar; 