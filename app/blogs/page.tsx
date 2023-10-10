"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "@/public/assets/css/blogpage.scss";
import Link from "next/link";
import DOMPurify from "dompurify";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  slug: string;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const api = "http://127.0.0.1:8000/api/blogs/";
  const apk = process.env.NEXT_PUBLIC_API_KEY;
  const apl = process.env.NEXT_PUBLIC_API_PARAMS;
  const api = process.env.NEXT_PUBLIC_API_URL;

  const fetchBlogPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${api}`, {
        headers: {
          Authorization: `${apl} ${apk}`,
        },
      });
      const newPosts = response.data;

      setBlogPosts((prevPosts) => {
        // Filter out posts that already exist in prevPosts
        const uniqueNewPosts = newPosts.filter((newPost: BlogPost) =>
          prevPosts.every((prevPost: BlogPost) => prevPost.id !== newPost.id)
        );

        return [...prevPosts, ...uniqueNewPosts];
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      // Display an error message to the user
    } finally {
      setIsLoading(false);
    }
  }, [api, apk, apl]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (
      blogPosts.length > 10 &&
      scrollHeight - scrollTop === clientHeight &&
      !isLoading
    ) {
      fetchBlogPosts();
    }
  };

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  const truncateContent = (content: string) => {
    // Display between 40 and 50 characters
    if (content.length <= 100000) {
      return content;
    }
    return content.slice(0, 90) + "...";
  };

  return (
    <div className="blog-page">
      <div className="blog-left">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <h2>{post.title}</h2>
            {/* Sanitize and render the content */}
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(truncateContent(post.content)),
              }}></div>
            {/* Use Link to navigate to the individual blog post page */}
            <Link href={`/blogs/${encodeURIComponent(post.slug)}`}>
              Read More
            </Link>
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
          <ul>{/* Render up to 4 popular topics here */}</ul>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
