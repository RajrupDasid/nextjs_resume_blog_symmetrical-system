"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "@/public/assets/css/blogpage.scss";
import Link from "next/link";
import DOMPurify from "dompurify";
import Image from "next/image";
import "@/public/assets/css/blogcard.scss";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  metadata: string;
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
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
    if (content.length <= 1000) {
      return content;
    }
    return content.slice(0, 900) + "...";
  };

  return (
    <div className="blog-page">
      <div className="blog-left">
        <div className="container">
          {blogPosts.map((post) => (
            <div className="card" key={post.id}>
              <figure className="card__thumb">
                <Image
                  src={post.thumbnail}
                  alt="post images"
                  className="card__background"
                  width={400}
                  height={700}
                />
                <figcaption className="card__caption">
                  <h2 className="card__title">{post.title}</h2>
                  <div
                    className="card__snippet"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(truncateContent(post.content)),
                    }}></div>
                  <Link
                    href={`/blogs/${encodeURIComponent(post.slug)}`}
                    className="card__button">
                    Read More
                  </Link>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

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
