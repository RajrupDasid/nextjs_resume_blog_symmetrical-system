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
  tags: string;
  blog: string;
  metadata: string;
  featured: boolean; // Add this property
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const apk = process.env.NEXT_PUBLIC_API_KEY;
  const apl = process.env.NEXT_PUBLIC_API_PARAMS;
  const api = process.env.NEXT_PUBLIC_API_URL;
  const fetchBlogPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${api}/api/blogs/`, {
        headers: {
          Authorization: `${apl} ${apk}`,
        },
      });
      const newPosts = response.data;
      const newFeaturedPosts = newPosts.filter(
        (newPost: BlogPost) => newPost.featured
      );
      setFeaturedPosts((prevFeaturedPosts) => {
        const uniqueNewFeaturedPosts = newFeaturedPosts.filter(
          (newPost: any) =>
            !prevFeaturedPosts.some((post) => post.id === newPost.id)
        );

        if (prevFeaturedPosts.length + uniqueNewFeaturedPosts.length > 10) {
          const countToRemove =
            prevFeaturedPosts.length + uniqueNewFeaturedPosts.length - 10;
          return [
            ...prevFeaturedPosts.slice(countToRemove),
            ...uniqueNewFeaturedPosts,
          ];
        }
        return [...prevFeaturedPosts, ...uniqueNewFeaturedPosts];
      });
      setBlogPosts((prevPosts) => {
        const nonFeaturedPosts = newPosts.filter(
          (newPost: BlogPost) => !newPost.featured
        );
        const uniqueNewPosts = newPosts.filter((newPost: BlogPost) =>
          prevPosts.every((prevPost: BlogPost) => prevPost.id !== newPost.id)
        );

        return [...prevPosts, ...uniqueNewPosts];
      });
    } catch (error) {
      console.error("Error fetching data:", error);
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
    return content.substring(0, 150);
  };

  const url = process.env.NEXT_PUBLIC_API_URL;
  const mode = process.env.NEXT_PUBLIC_ENV_STATE;

  return (
    <div className="blog-page">
      <div className="blog-left">
        <div className="featured-posts p-4">
          {featuredPosts.map((post, index) => {
            let imageurl = "";
            if (mode === "debug") {
              imageurl = `${url}/${post.thumbnail}`;
            } else {
              imageurl = post.thumbnail;
            }

            return (
              <div
                key={post.id}
                className={`w-full flex mb-4 border rounded-lg`}>
                <div className="w-1/2 p-4">
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <div
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(truncateContent(post.content)),
                    }}></div>
                  <Link
                    href={`/blogs/${encodeURIComponent(post.slug)}`}
                    className="text-blue-500 mt-2">
                    Read More
                  </Link>
                </div>
                <div className="w-1/2">
                  <Image
                    src={imageurl}
                    alt="post images"
                    className="object-cover w-full h-full"
                    width={400}
                    height={700}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="card-container">
          <h1>Recent Post</h1>
          <h6>Infinite scrolling</h6>
          {blogPosts.map((post) => {
            let imageurl = "";
            if (mode === "debug") {
              imageurl = `${url}/${post.thumbnail}`;
            } else {
              imageurl = post.thumbnail;
            }

            return (
              <div className="cardz" key={post.id}>
                <div className="card-image">
                  <Image
                    src={imageurl}
                    alt="post images"
                    className="card__background"
                    width={400}
                    height={700}
                  />
                </div>
                <div className="card-content">
                  <h2>{post.title}</h2>
                  <div
                    className="card__snippet"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(truncateContent(post.content)),
                    }}></div>
                  <Link
                    href={`/blogs/${encodeURIComponent(post.slug)}`}
                    className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
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
