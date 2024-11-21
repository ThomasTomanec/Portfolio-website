'use client';

import React from 'react';
import BlogTable from '@/app/(protected)/tables/BlogTable';


const BlogPage  = () => {

  return (
    <div className="min-h-screen p-4">
      <BlogTable/>
    </div>
  );
};

export default BlogPage;
