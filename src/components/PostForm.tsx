// src/components/PostForm.tsx
import React, { useState } from "react";
import { Post, Category, CATEGORIES } from "../types";
import { nowIso } from "../utils";

interface Props {
  initial?: Post;
  onCancel: () => void;
  onSave: (post: Post) => void;
}

export default function PostForm({ initial, onCancel, onSave }: Props) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [author, setAuthor] = useState(initial?.author ?? "");
  const [thumbnail, setThumbnail] = useState(initial?.thumbnail ?? "");
  const [content, setContent] = useState(initial?.content ?? "");
  const [category, setCategory] = useState<Category>(initial?.category ?? "Khác");
  const [errors, setErrors] = useState<{ [k: string]: string }>({});

  function validate() {
    const e: { [k: string]: string } = {};
    if (!title || title.trim().length < 10) e.title = "Tiêu đề phải ít nhất 10 ký tự";
    if (!author || author.trim().length < 3) e.author = "Tác giả phải ít nhất 3 ký tự";
    if (!content || content.trim().length < 50) e.content = "Nội dung phải ít nhất 50 ký tự";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    onSave({
      id: initial?.id ?? Date.now().toString(),
      title: title.trim(),
      author: author.trim(),
      thumbnail: thumbnail.trim() || "https://picsum.photos/seed/default/600/400",
      content: content.trim(),
      category,
      createdAt: initial?.createdAt ?? nowIso(),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-4 rounded shadow">
      <div className="mb-3">
        <label className="block font-medium">Tiêu đề</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border px-3 py-2 rounded" />
        {errors.title && <div className="text-red-600 text-sm mt-1">{errors.title}</div>}
      </div>

      <div className="mb-3">
        <label className="block font-medium">Tác giả</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full border px-3 py-2 rounded" />
        {errors.author && <div className="text-red-600 text-sm mt-1">{errors.author}</div>}
      </div>

      <div className="mb-3">
        <label className="block font-medium">URL ảnh thumbnail</label>
        <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} className="w-full border px-3 py-2 rounded" />
      </div>

      <div className="mb-3">
        <label className="block font-medium">Nội dung</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={10} className="w-full border px-3 py-2 rounded" />
        {errors.content && <div className="text-red-600 text-sm mt-1">{errors.content}</div>}
      </div>

      <div className="mb-3">
        <label className="block font-medium">Thể loại</label>
        <select value={category} onChange={(e) => setCategory(e.target.value as Category)} className="w-full border px-3 py-2 rounded">
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="flex gap-2 justify-end">
        <button type="button" onClick={onCancel} className="px-4 py-2 border rounded">Hủy</button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">{initial ? "Cập nhật" : "Đăng bài"}</button>
      </div>
    </form>
  );
}
