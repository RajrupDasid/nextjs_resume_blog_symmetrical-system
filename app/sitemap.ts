import axios from "axios";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  metadata: string;
  update: Date; // Add a property for last modified date
  post:string;
}

async function fetchBlogPosts() {
  const apk = process.env.NEXT_PUBLIC_API_KEY;
  const apl = process.env.NEXT_PUBLIC_API_PARAMS;
  const api = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await axios.get(`${api}`, {
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
  const baseUrl = "https://www.webstackpros.net";
  const posts = await fetchBlogPosts();
  const postUrls = posts.map((post:BlogPost) => ({
    url: `${baseUrl}/blogs/${encodeURIComponent(post.slug)}`,
    lastModified: post.update,
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    {url:`${baseUrl}/services`,lastModified:new Date()},
    {url:`${baseUrl}/projects`,lastModified:new Date()},
    {url:`${baseUrl}/contact`,lastModified:new Date()},
    {url:`${baseUrl}/blogs`,lastModified:new Date()},
    {url:`${baseUrl}/privacy-policy`,lastModified:new Date()},
    ...postUrls,
  ];
}
