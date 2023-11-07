"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "@/public/assets/css/master.scss";
import Link from "next/link";
import DOMPurify from "dompurify";
import Image from "next/image";
import "@/public/assets/css/blogcard.scss";
// import search from "@/controller/search";
import SearchForm from "@/components/searchfrom/searchform";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const api = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const apiParams = process.env.NEXT_PUBLIC_API_PARAMS;

  const fetchBlogPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${api}/api/blogs/`, {
        timeout: 90000000,
        headers: {
          Authorization: `${apiParams} ${apiKey}`,
        },
      });

      const newPosts = response.data;
      const newFeaturedPosts = newPosts.filter(
        (newPost: BlogPost) => newPost.featured
      );

      // Check for unique new posts
      setFeaturedPosts((prevFeaturedPosts) => {
        const uniqueNewFeaturedPosts = newFeaturedPosts.filter(
          (newPost: any) =>
            !prevFeaturedPosts.some((post) => post.id === newPost.id)
        );

        if (uniqueNewFeaturedPosts.length > 0) {
          return [...prevFeaturedPosts, ...uniqueNewFeaturedPosts];
        }
        return prevFeaturedPosts;
      });

      // Check for unique new posts
      setBlogPosts((prevPosts) => {
        const nonFeaturedPosts = newPosts.filter(
          (newPost: BlogPost) => !newPost.featured
        );
        const uniqueNewPosts = nonFeaturedPosts.filter((newPost: BlogPost) =>
          prevPosts.every((prevPost: BlogPost) => prevPost.id !== newPost.id)
        );

        if (uniqueNewPosts.length > 0) {
          return [...prevPosts, ...uniqueNewPosts];
        }
        return prevPosts;
      });
      // toast.warning("This website is in beta testing mode");
    } catch (error) {
      // console.error("Error fetching data:", error);
      toast.error("Server is currently under maintanance");
    } finally {
      setIsLoading(false);
    }
  }, [api, apiKey, apiParams]);

  useEffect(() => {
    fetchBlogPosts();
  }, [fetchBlogPosts]);

  const truncateContent = (content: string) => content.substring(0, 180);

  function getUniqueCategories(posts: any) {
    const uniqueCategories: any = [];

    posts.forEach((post: any) => {
      if (!uniqueCategories.includes(post.category)) {
        uniqueCategories.push(post.category);
      }
    });

    return uniqueCategories;
  }

  const url = api;
  const mode = process.env.NEXT_PUBLIC_ENV_STATE;

  return (
    <>
      <div className="flex flex-wrap place-items-center place-content-center categories-list">
        <h1 className="mb-10 text-2xl">Category</h1>

        <ul className="flex flex-wrap mt-10 ">
          {getUniqueCategories(blogPosts)
            .slice(0, 10)
            .map((category: any, index: number) => (
              <li
                key={category}
                className="bg-gradient-to-r from-blue-950 to-purple-900 tagsclass p-2 m-3 rounded border border-gray-300 text-white">
                <Link href={`${category}/`}>{category}</Link>
              </li>
            ))}
        </ul>
      </div>
      <hr className="mt-5 mb-5 hrclst" />
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
                      width={519}
                      height={354}
                      layout="responsive"
                      loading="eager"
                      quality={30}
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
                      width={519}
                      height={354}
                      layout="responsive"
                      loading="eager"
                      quality={50}
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
      <ToastContainer />
    </>
  );
}
