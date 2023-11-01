import axios from "axios";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  metadata: string;
  updated: Date; // Add a property for last modified date
  category: string;
  post:string;
}

async function fetchBlogPosts() {
  const apk = process.env.NEXT_PUBLIC_API_KEY;
  const apl = process.env.NEXT_PUBLIC_API_PARAMS;
  const api = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await axios.get(`${api}/api/blogs/`, {
      headers: {
        Authorization: `${apl} ${apk}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching blog post data:", error);
    return [];
  }
}

export default async function sitemap() {
  const url = "https://www.webstackpros.net"
  const baseUrl = url;
  const posts = await fetchBlogPosts();
  const postUrls = posts.map((post:BlogPost) => ({
    url: `${baseUrl}/${post.category}/${post.slug}`,
    lastModified: post.updated,
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    {url:`${baseUrl}/contact`,lastModified:new Date()},
    {url:`${baseUrl}/privacy-policy`,lastModified:new Date()},
    {url:`${baseUrl}/terms-and-conditions`,lastModified:new Date()},
    ...postUrls,
  ];
}
