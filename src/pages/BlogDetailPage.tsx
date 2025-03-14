
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '@/data/blogData';
import { ArrowLeft, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const BlogDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState(blogData.find(blog => blog.slug === slug));
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Find the blog post that matches the current slug
    const currentBlog = blogData.find(blog => blog.slug === slug);
    setBlog(currentBlog);
  }, [slug]);
  
  if (!blog) {
    return (
      <div className="min-h-screen bg-automation-dark text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Blog post not found</h1>
        <Button asChild>
          <Link to="/blogs">Return to Blogs</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-automation-dark text-white">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-24">
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/blogs" className="flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Back to Blogs
              </Link>
            </Button>
            
            <div className="aspect-[21/9] w-full overflow-hidden rounded-lg mb-8">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex items-center mb-4">
              <Calendar size={18} className="text-automation-purple-light mr-2" />
              <span className="text-gray-400">{blog.date}</span>
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-gray-400">By {blog.author}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{blog.title}</h1>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-4xl mx-auto">
            <div 
              dangerouslySetInnerHTML={{ __html: blog.content }} 
              className="prose-headings:text-automation-purple-light prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-li:marker:text-automation-purple-light prose-li:my-1 prose-ul:my-4 prose-p:mb-4"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetailPage;
