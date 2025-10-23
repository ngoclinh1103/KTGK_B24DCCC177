// src/components/Navbar.tsx
import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="https://picsum.photos/seed/logo/40/40" alt="logo" className="w-10 h-10 rounded" />
            <span className="font-bold text-lg">Blog Manager</span>
          </Link>

          <nav className="hidden md:flex gap-4">
            <NavLink
              to="/"
              end
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "text-red-600 font-semibold" : "text-gray-700"
              }
            >
              Trang chủ
            </NavLink>

            <NavLink
              to="/posts/create"
              className={({ isActive }: { isActive: boolean }) =>
                isActive ? "text-red-600 font-semibold" : "text-gray-700"
              }
            >
              Viết bài
            </NavLink>
          </nav>
        </div>

        <div>
          <Link to="/posts/create" className="bg-green-500 text-white px-3 py-2 rounded hover:opacity-90">
            ➕ Viết bài mới
          </Link>
        </div>
      </div>
    </header>
  );
}
