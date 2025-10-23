// src/types.ts
export const CATEGORIES = ["Công nghệ", "Du lịch", "Ẩm thực", "Đời sống", "Khác"] as const;
export type Category = typeof CATEGORIES[number];

export interface Post {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  content: string;
  category: Category;
  createdAt: string;
}
