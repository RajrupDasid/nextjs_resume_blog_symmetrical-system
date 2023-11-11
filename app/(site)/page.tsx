import axios from "axios";
import "@/public/assets/css/master.scss";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import "@/public/assets/css/blogcard.scss";

const apk = process.env.NEXT_PUBLIC_API_KEY;
const apl = process.env.NEXT_PUBLIC_API_PARAMS;
const mode = process.env.NEXT_PUBLIC_ENV_STATE;
const local = process.env.NEXT_PUBLIC_API_URL;
let imageurl = "";

const getData = async (): Promise<any> => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const api = `${url}/api/blogs/`;
  const res = await axios.get(api, {
    timeout: 90000000,
    headers: {
      Authorization: `${apl} ${apk}`,
    },
  });
  return res.data;
};
interface BlogPosts {
  _id: string;
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
const dakars = (posts: any) => {
  const uniqueCategories: any = [];

  posts.forEach((post: any) => {
    if (!uniqueCategories.includes(post.category)) {
      uniqueCategories.push(post.category);
    }
  });

  return uniqueCategories;
};
const truncateContent = (content: string) => content.substring(0, 180);

const Blog = async () => {
  const posts = await getData();
  const newFeaturedPosts = posts.filter(
    (newPost: BlogPosts) => newPost.featured
  );
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        {/* Featured Post Card */}
        <div>
          <h1 className="text-white font-extrabold text-4xl underline mb-10">
            Featured
          </h1>
        </div>
        {newFeaturedPosts.length > 0 && (
          <div className="bg-blue-950 p-4 rounded shadow-md">
            <div className="p-10">
              <div className="w-full lg:max-w-full lg:flex">
                <div
                  className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  title="Mountain"></div>
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  bg-sky-900 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    {newFeaturedPosts.map((post: BlogPosts) => (
                      <div key={post._id}>
                        <Link
                          href={`${post.category}/${encodeURIComponent(
                            post.slug
                          )}`}>
                          <Image
                            className="object-cover  md:mx-10 sm:mx-16  w-300 h-64 rounded-t-lg md:w-300 md:rounded-none md:rounded-l-lg"
                            src={`${
                              mode === "debug"
                                ? `${local}/${post.thumbnail}`
                                : post.thumbnail
                            }`}
                            alt="featured post images"
                            width={400}
                            height={700}
                            quality={30}
                          />
                          <div className="text-white font-bold text-xl mb-2">
                            {post.title}
                          </div>
                          <div
                            className="text-white text-base"
                            dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(
                                truncateContent(post.content)
                              ),
                            }}></div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mb-20 mt-20 overflow-x-auto overflow-y-hidden">
        <div>
          <h4 className="text-white mb-10 text-4xl font-bold underline">
            Category
          </h4>
        </div>
        <div className="flex space-x-4">
          {dakars(posts).map((category: any, index: any) => (
            <div
              className="flex flex-grow items-center px-10 bg-gradient-to-r from-cyan-900 to-blue-950 w-36 h-30 rounded shadow-md "
              key={index}>
              <Link href={`${category}/`}>{category}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4 mt-30">
        {/* All Post Section */}
        <div className="flex">
          <div className="w-3/4 p-4">
            <div className="text-white text-4xl underline mx-28">
              <h4 className="text-white font-bold mb-10">All Posts</h4>
            </div>
            <div className="overflow-y-auto h-auto max-h-screen">
              {posts &&
                posts.length > 0 &&
                posts.map((post: BlogPosts) => (
                  <Link
                    href={`${post.category}/${encodeURIComponent(post.slug)}`}
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mt-10 "
                    key={post._id}>
                    <Image
                      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                      src={`${
                        mode === "debug"
                          ? `${local}/${post.thumbnail}`
                          : post.thumbnail
                      }`}
                      alt="post images"
                      width={400}
                      height={700}
                      quality={30}
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {post.title}
                      </h5>

                      <div
                        className="mb-3 font-normal text-white dark:text-gray-200 overflow-hidden"
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(
                            truncateContent(post.content)
                          ),
                        }}></div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className="w-1/4 p-4 sm:hidden"></div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
