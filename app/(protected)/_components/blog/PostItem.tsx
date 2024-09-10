'use client';

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface PostItemProps {
  post: Post;
  onEdit: (post: Post) => void;
  onDelete: (id: string) => void;
}

const PostItem: React.FC<PostItemProps> = ({ post, onEdit, onDelete }) => (
  <div className="border p-4 mb-4">
    <h3 className="text-xl font-bold">{post.title}</h3>
    <p>{post.content}</p>
    <p className="text-sm text-gray-500">Added on: {post.date}</p> {/* Zobraz datum */}
    <button onClick={() => onEdit(post)} className="bg-yellow-500 text-white p-2 mr-2">Edit</button>
    <button onClick={() => onDelete(post.id)} className="bg-red-500 text-white p-2">Delete</button>
  </div>
);

export default PostItem;
