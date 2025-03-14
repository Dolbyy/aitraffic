
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import BlogCard from '@/components/blog/BlogCard';
import { blogData } from '@/data/blogData';

const BlogsSection = () => {
  // Only show the first 3 blogs on the home page
  const featuredBlogs = blogData.slice(0, 3);
  
  return (
    <section id="blogs" className="bg-automation-dark-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Latest <span className="text-gradient">Insights</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our latest articles about AI automation, business processes, and digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="bg-gradient-to-r from-automation-purple to-automation-blue hover:opacity-90">
            <Link to="/blogs">View All Blogs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
