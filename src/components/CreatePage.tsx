// src/components/CreatePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../types";
import PostForm from "./PostForm";

interface Props { onCreate: (post: Post) => void; }

export default function CreatePage({ onCreate }: Props) {
  const navigate = useNavigate();
  function handleCancel() { navigate("/"); }
  function handleSave(post: Post) { onCreate(post); alert("Đăng bài thành công!"); navigate("/"); }

  return (
    <main className="container mx-auto px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Tạo bài viết mới</h2>
      <PostForm onCancel={handleCancel} onSave={handleSave} />
    </main>
  );
}
