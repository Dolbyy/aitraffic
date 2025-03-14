
import React from 'react';
import { blogData } from '@/data/blogData';
import BlogCard from '@/components/blog/BlogCard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-automation-dark text-white">
      <Header />
      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-gradient">Blog</span></h1>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Insights, updates, and expert perspectives on AI automation and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogData.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogsPage;
