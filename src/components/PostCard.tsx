// src/components/PostCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../types";
import { short } from "../utils";

interface Props {
  post: Post;
  onDelete: (id: string) => void;
}

export default function PostCard({ post, onDelete }: Props) {
  const navigate = useNavigate();
  const postId = post.id; // local copy to satisfy TS in callbacks

  return (
    <article className="border rounded overflow-hidden shadow-sm flex flex-col">
      <img src={post.thumbnail} alt={post.title} className="w-full h-40 object-cover" />
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
        <div className="text-sm text-gray-500 mb-2">
          Bởi {post.author} • {new Date(post.createdAt).toLocaleDateString()}
        </div>
        <p className="text-sm text-gray-700 flex-1">{short(post.content, 100)}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-2">
            <button onClick={() => navigate(`/posts/${postId}`)} className="px-3 py-1 bg-blue-500 text-white rounded text-sm">
              Đọc thêm
            </button>
            <button
              onClick={() => {
                if (confirm("Bạn có chắc muốn xóa bài viết này?")) onDelete(postId);
              }}
              className="px-3 py-1 bg-red-100 text-red-600 rounded text-sm"
            >
              Xóa
            </button>
          </div>

          <div className="text-xs text-gray-500">{post.category}</div>
        </div>
      </div>
    </article>
  );
}
