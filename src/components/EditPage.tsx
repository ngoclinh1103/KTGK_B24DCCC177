// src/components/EditPage.tsx
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../types";
import PostForm from "./PostForm";

interface Props { posts: Post[]; onUpdate: (post: Post) => void; }

export default function EditPage({ posts, onUpdate }: Props) {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === id);
  if (!post) return <main className="container mx-auto px-4 py-6">Không tìm thấy bài viết.</main>;

  const postId = post.id;
  function handleCancel() { navigate(`/posts/${postId}`); }
  function handleSave(updated: Post) { onUpdate(updated); alert("Cập nhật thành công!"); navigate(`/posts/${postId}`); }

  return (
    <main className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Chỉnh sửa bài viết</h2>
      <PostForm initial={post} onCancel={handleCancel} onSave={handleSave} />
    </main>
  );
}
