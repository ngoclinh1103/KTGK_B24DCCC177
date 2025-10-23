// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostDetailView from "./components/PostDetailView";
import CreatePage from "./components/CreatePage";
import EditPage from "./components/EditPage";

import { Post } from "./types";
import { nowIso } from "./utils";

const initialPosts: Post[] = [
  { id: "1", title: "Giới thiệu về React và TypeScript", author: "Ngọc Linh", thumbnail: "https://picsum.photos/seed/react/600/400", content: "React + TypeScript hướng dẫn cơ bản...", category: "Công nghệ", createdAt: nowIso() },
  { id: "2", title: "Hành trình Hà Giang", author: "Hà", thumbnail: "https://picsum.photos/seed/ha-giang/600/400", content: "Hành trình 5 ngày...", category: "Du lịch", createdAt: nowIso() },
  { id: "3", title: "Món phở", author: "Minh", thumbnail: "https://picsum.photos/seed/pho/600/400", content: "Công thức phở...", category: "Ẩm thực", createdAt: nowIso() },
];

export default function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  function handleCreate(p: Post) { setPosts(prev => [p, ...prev]); }
  function handleDelete(id: string) { setPosts(prev => prev.filter(p => p.id !== id)); }
  function handleUpdate(updated: Post) { setPosts(prev => prev.map(p => p.id === updated.id ? updated : p)); }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList posts={posts} onDelete={handleDelete} />} />
          <Route path="/posts" element={<PostList posts={posts} onDelete={handleDelete} />} />
          <Route path="/posts/create" element={<CreatePage onCreate={handleCreate} />} />
          <Route path="/create" element={<CreatePage onCreate={handleCreate} />} />
          <Route path="/posts/:id" element={<PostDetailView posts={posts} onDelete={handleDelete} onUpdate={handleUpdate} />} />
          <Route path="/posts/edit/:id" element={<EditPage posts={posts} onUpdate={handleUpdate} />} />
          <Route path="*" element={<main className="container mx-auto px-4 py-6">Trang không tìm thấy.</main>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
