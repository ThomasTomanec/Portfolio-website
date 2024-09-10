// src/components/PostList.tsx

import React from 'react';
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";



interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface PostListProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: string) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, onEdit, onDelete }) => {
  return (
    <div className="space-y-4">
      {posts.map(post => (
        <div
          key={post.id}
          className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.date}</p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => onEdit(post)}>
                <MdOutlineEdit  className='w-[22px] h-[22px]' />

              </button>
              <button
                onClick={() => onDelete(post.id)}>
          <MdDeleteOutline className='w-[22px] h-[22px]'/>

              </button>
            </div>
          </div>
          <p className="break-words text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
