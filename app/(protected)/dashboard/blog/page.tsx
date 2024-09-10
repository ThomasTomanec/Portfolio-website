// src/pages/dashboard/blog/page.tsx

'use client'; // Přidání direktivy "use client"

import React, { useState } from 'react';
import PostForm from '../../_components/blog/PostForm';
import PostList from '../../_components/blog/PostList';

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleCreateOrUpdatePost = (post: { title: string; content: string }) => {
    if (editingPost) {
      // Update post
      setPosts(posts.map(p => p.id === editingPost.id ? { ...editingPost, ...post } : p));
      setEditingPost(null);
    } else {
      // Create new post with current date
      const currentDate = new Date().toLocaleDateString();
      setPosts([...posts, { id: Date.now().toString(), ...post, date: currentDate }]);
    }
    setShowForm(false); // Skrýt formulář po uložení
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setShowForm(true);
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen p-4">
      {/* Kontejner pro tlačítko */}
      <div className="flex">
        <button
          onClick={() => { setShowForm(true); setEditingPost(null); }}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Create Post
        </button>
      </div>

      {/* Formulář */}
      {showForm && (
        <PostForm
          onSubmit={handleCreateOrUpdatePost}
          initialData={editingPost || undefined}
          onClose={() => setShowForm(false)} // Zavření formuláře
        />
      )}

      {/* Seznam příspěvků */}
      <div className="mt-3">
        <PostList posts={posts} onEdit={handleEditPost} onDelete={handleDeletePost} />
      </div>
    </div>
  );
};

export default BlogPage;
