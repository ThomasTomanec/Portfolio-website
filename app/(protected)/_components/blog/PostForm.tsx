// src/components/blog/PostForm.tsx

import React, { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

interface PostFormProps {
  onSubmit: (post: { title: string; content: string }) => void;
  initialData?: { title: string; content: string };
  onClose: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit, initialData, onClose }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting post:', { title, content }); // Debug log
    onSubmit({ title, content });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <RiCloseLine className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-semibold mb-4">{initialData ? 'Edit Post' : 'Create Post'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-2">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter the title"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 text-sm font-medium mb-2">
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter the content"
              rows={6}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {initialData ? 'Update Post' : 'Create Post'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
