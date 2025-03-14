
import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '@/data/blogData';
import { CalendarDays } from 'lucide-react';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <div className="glass-card rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
      <div className="aspect-video overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <CalendarDays size={16} className="mr-2" />
          <span>{blog.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{blog.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-3">{blog.excerpt}</p>
        <Link 
          to={`/blogs/${blog.slug}`} 
          className="text-automation-purple-light hover:text-automation-purple transition-colors inline-flex items-center"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
