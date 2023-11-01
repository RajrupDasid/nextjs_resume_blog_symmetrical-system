"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "@/public/assets/css/blogpage.scss";
import "@/public/assets/css/master.scss";
import Link from "next/link";
import DOMPurify from "dompurify";
import Image from "next/image";
import "@/public/assets/css/blogcard.scss";
// import search from "@/controller/search";
import SearchForm from "@/components/searchfrom/searchform";
import Cookies from "universal-cookie";
import generateRandomString from "@/lib/Tokengenerator";
export interface BlogPost {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  tags: string;
  blog: string;
  metadata: string;
  category: string;
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
      const cookies = new Cookies();
      cookies.set("_intercom", generateRandomString(100), {
        path: "/",
        sameSite: "strict",
        secure: true,
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
    return content.substring(0, 180);
  };

  const url = process.env.NEXT_PUBLIC_API_URL;
  const mode = process.env.NEXT_PUBLIC_ENV_STATE;

  return (
    <div className="blog-page">
      <div className="blog-left">
        <div className="featured-post p-4">
          <div className="flex px-60 mb-10 text-lg featured-posts">
            <h1 className="text-white text-2xl px-10">Featured Posts</h1>
          </div>
          {featuredPosts.map((post, index) => {
            let imageurl = "";
            if (mode === "debug") {
              imageurl = `${url}/${post.thumbnail}`;
            } else {
              imageurl = post.thumbnail;
            }

            return (
              <div
                className="bg-gradient-to-r from-gray-900 to-purple-900 max-w-sm rounded overflow-hidden  mt-10 h-180  shadow-lg fcards"
                key={post.id}>
                <Link
                  href={`${post.category}/${encodeURIComponent(post.slug)}`}>
                  <Image
                    src={imageurl}
                    alt="post images"
                    className="w-full"
                    width={400}
                    height={700}
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{post.title}</div>
                    <div
                      className="text-white text-base w-40 overflow-hidden"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          truncateContent(post.content)
                        ),
                      }}></div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="card-container">
          <div className="mt-6 rposttop">
            <h1 className="text-white text-2xl recentpost">Recent Post</h1>
          </div>
          {blogPosts.map((post) => {
            let imageurl = "";
            if (mode === "debug") {
              imageurl = `${url}/${post.thumbnail}`;
            } else {
              imageurl = post.thumbnail;
            }

            return (
              <div
                className="bg-gradient-to-r from-gray-900 to-purple-900 max-w-sm rounded overflow-hidden  mt-10 h-180  shadow-lg tcards"
                key={post.id}>
                <Link
                  href={`${post.category}/${encodeURIComponent(post.slug)}`}>
                  <Image
                    src={imageurl}
                    alt="post images"
                    className="w-full"
                    width={400}
                    height={700}
                  />

                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{post.title}</div>
                    <div
                      className="text-white text-base w-40 overflow-hidden"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          truncateContent(post.content)
                        ),
                      }}></div>
                  </div>
                </Link>
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
        {/* <div className="popular-topics">
          <h3>Popular Tags</h3>
          <ul></ul>
        </div> */}
        <SearchForm />
      </div>
    </div>
  );
}
