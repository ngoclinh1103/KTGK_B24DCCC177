// src/components/PostList.tsx
import React, { useState, useMemo } from "react";
import { Post } from "../types";
import PostCard from "./PostCard";

interface Props {
  posts: Post[];
  onDelete: (id: string) => void;
}

export default function PostList({ posts, onDelete }: Props) {
  const [filter, setFilter] = useState("");
  const filtered = useMemo(
    () => posts.filter((p) => p.title.toLowerCase().includes(filter.toLowerCase())),
    [posts, filter]
  );

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Danh sách bài viết ({filtered.length})</h1>

        <div className="flex gap-2">
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Tìm theo tiêu đề..."
            className="border px-3 py-2 rounded"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <PostCard key={p.id} post={p} onDelete={onDelete} />
        ))}
      </div>

      {filtered.length === 0 && <p className="text-center text-gray-500 mt-6">Không có bài viết nào khớp.</p>}
    </main>
  );
}
