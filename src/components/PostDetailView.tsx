import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../types";

interface Props {
  posts: Post[];
  onDelete: (id: string) => void;
  onUpdate: (post: Post) => void;
}

export default function PostDetailView({ posts, onDelete, onUpdate }: Props) {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();

  const post = posts.find((p) => p.id === id);

  // 🧱 Kiểm tra nếu không tìm thấy bài viết
  if (!post) {
    return (
      <main className="container mx-auto px-4 py-6 max-w-3xl">
        <h1 className="text-xl font-bold text-red-500">Không tìm thấy bài viết</h1>
        <button onClick={() => navigate(-1)} className="mt-4 px-3 py-2 border rounded">
          Quay lại
        </button>
      </main>
    );
  }

  const postId = post.id;

  return (
    <main className="container mx-auto px-4 py-6 max-w-3xl">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <div className="text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
      </div>

      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <div className="text-sm text-gray-600 mb-2">
        Tác giả: {post.author} • Thể loại: {post.category}
      </div>
      <div className="whitespace-pre-line text-gray-800 mb-6">{post.content}</div>

      <div className="flex gap-2">
        <button onClick={() => navigate(-1)} className="px-3 py-2 border rounded">
          Quay lại
        </button>
        <button
          onClick={() => navigate(`/posts/edit/${postId}`)}
          className="px-3 py-2 bg-yellow-500 text-white rounded"
        >
          Chỉnh sửa
        </button>
        <button
          onClick={() => {
            if (confirm("Bạn có chắc chắn muốn xóa bài viết này không ?")) {
  onDelete(post.id);
}
          }}
          className="px-3 py-2 bg-red-100 text-red-600 rounded"
        >
          Xóa bài viết
        </button>
      </div>
    </main>
  );
}
