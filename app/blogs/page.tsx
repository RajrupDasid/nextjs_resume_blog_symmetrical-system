"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
// import "../assets/css/blogpage.scss";
import "@/public/assets/css/blogpage.scss";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  //const apiURl = process.env.NEXT_PUBLIC_API_URL;
  //console.log(apiURl);
  const apiURl = "http://127.0.0.1:8000/api/blogs/";
  const apk = process.env.NEXT_PUBLIC_API_KEY;

  const apl = process.env.NEXT_PUBLIC_API_PARAMS;

  const fetchBlogPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(apiURl, {
        headers: {
          Authorization: `${apl} ${apk}`,
        },
      });
      const newPosts = response.data;
      setBlogPosts((prevPosts) => [...prevPosts, ...newPosts]);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Display an error message to the user
    } finally {
      setIsLoading(false);
    }
  }, [apiURl, apk, apl]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && !isLoading) {
      fetchBlogPosts();
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  return (
    <div className="blog-page">
      <div className="blog-left" onScroll={handleScroll}>
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
        {isLoading && <p>Loading...</p>}
      </div>
      <div className="blog-right">
        <div className="recent-posts">
          <h3>Recent Posts</h3>
          <ul>
            {blogPosts.slice(0, 10).map((post) => (
              <li key={post.id}>
                <a href="#">{post.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="popular-topics">
          <h3>Popular Topics</h3>
          <ul>
            {/* Render up to 4 popular topics here */}
            {/* ... */}
          </ul>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
