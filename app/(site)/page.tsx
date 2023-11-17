import axios from "axios";
import "@/public/assets/css/master.scss";
import Link from "next/link";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import "@/public/assets/css/blogcard.scss";
import cron from "node-cron";

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
const getTrendingData = async (): Promise<any> => {
  const uri = process.env.NEXT_PUBLIC_API_URL;
  const apx = `${uri}/api/trending`;
  const response = await axios.get(apx, {
    timeout: 90000000,
    headers: {
      Authorization: `${apl} ${apk}`,
    },
  });
  return response.data;
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
const truncateContent = (content: string) => content.substring(0, 580);
const mmpo = (content: string) => content.substring(0, 50);
const Blog = async () => {
  const posts = await getData();
  const tposts = await getTrendingData();
  cron.schedule("*/10 * * * *", async () => {
    // Run every 10 minutes
    await getData();
    await getTrendingData();
  });

  const newFeaturedPosts = posts
    .filter((newPost: BlogPosts) => newPost.featured)
    .slice(0, 3);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        {/* Featured Post Card */}
        <div>
          <h1 className="text-white font-extrabold text-4xl underline mb-10">
            Featured
          </h1>
        </div>
        <div className="bg-slate-950 p-4 rounded shadow-md">
          <div className="p-4 lg:p-10">
            <div className="w-full lg:max-w-full lg:flex justify-center">
              <div className="flex bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center lg:text-left overflow-hidden">
                <div className="mb-4 lg:mb-8 flex flex-col items-center lg:items-start justify-center lg:justify-start w-full">
                  {newFeaturedPosts.map((post: BlogPosts) => (
                    <div key={post._id} className="mb-4 w-full">
                      <Link
                        href={`${post.category}/${encodeURIComponent(
                          post.slug
                        )}`}>
                        <div className="text-4xl  font-extra-bold w-full">
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
              className="flex flex-grow items-center px-10 bg-gradient-to-r from-slate-800 to-blue-950 h-20 w-40 rounded shadow-md mb-5"
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
            <div className="overflow-y-auto overflow-x-hidden h-auto max-h-screen  ml-10 md:mx-10">
              {posts &&
                posts.length > 0 &&
                posts.map((post: BlogPosts) => (
                  <Link
                    href={`${post.category}/${encodeURIComponent(post.slug)}`}
                    className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 border border-gray-200 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-700 mt-10  md:mt-8 mx-2 md:mx-8  p-4"
                    key={post._id}>
                    <div className="flex flex-col justify-between leading-normal w-full">
                      <Image
                        src={`${
                          mode === "debug"
                            ? `${local}/${post.thumbnail}`
                            : post.thumbnail
                        }`}
                        alt="post images"
                        className="w-8 h-8 rounded-full"
                        width={400}
                        height={700}
                        quality={40}
                      />
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {post.title}
                      </h5>

                      <div
                        className="mb-3 font-normal text-gray-700 dark:text-gray-300 overflow-hidden"
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
          <div className="w-1/4 p-4 mt-20 hidden sm:block">
            <h2 className="text-white text-4xl underline mb-4">
              Trending Posts
            </h2>
            <div className="flow-root">
              {tposts &&
                posts.length > 0 &&
                tposts.map((tpost: BlogPosts) => (
                  <ul
                    role="list"
                    className="divide-y divide-gray-200 dark:divide-gray-700"
                    key={tpost._id}>
                    <li className="py-3 sm:py-4">
                      <Link
                        href={`${tpost.category}/${encodeURIComponent(
                          tpost.slug
                        )}`}>
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Neil image"> */}
                            <Image
                              src={`${
                                mode === "debug"
                                  ? `${local}/${tpost.thumbnail}`
                                  : tpost.thumbnail
                              }`}
                              alt="post images"
                              className="w-8 h-8 rounded-full"
                              width={400}
                              height={700}
                              quality={40}
                            />
                          </div>
                          <div className="flex-1 min-w-0 ms-4">
                            <p className="text-2xl font-medium text-gray-900 truncate dark:text-white">
                              {tpost.title}
                            </p>
                            <div
                              className="text-sm text-gray-500 truncate dark:text-gray-400 overflow-hidden mt-4"
                              dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(mmpo(tpost.content)),
                              }}></div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
