import DOMPurify from "isomorphic-dompurify";
import axios from "axios";
import "@/public/assets/css/categorypage.scss";
import Image from "next/image";
import Link from "next/link";

const apk = process.env.NEXT_PUBLIC_API_KEY;
const apl = process.env.NEXT_PUBLIC_API_PARAMS;
const mode = process.env.NEXT_PUBLIC_ENV_STATE;
const local = process.env.NEXT_PUBLIC_API_URL;
let imageurl = "";
const getData = async (category: string): Promise<any> => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const api = `${url}/api/category/${category}`;
  const res = await axios.get(api, {
    timeout: 90000000,
    headers: {
      Authorization: `${apl} ${apk}`,
    },
  });
  return res.data;
};

interface Post {
  id: number;
  _id: string;
  title: string;
  thumbnail: string;
  slug: string;
  content: string;
}

interface Params {
  category: string;
}

const Category = async ({
  params,
}: {
  params: Params;
}): Promise<JSX.Element> => {
  const { category } = params;
  const posts = await getData(category);
  const truncateContent = (content: string) => {
    return content ? content.substring(0, 180) : "";
  };
  if (mode === "debug") {
    imageurl = `${local}/${posts.thumbnail}`;
  } else {
    imageurl = `${posts.thumbnail}`;
  }
  return (
    <div className="congular">
      <h1 className="text-2xl px-40 mt-10">Category post List</h1>
      {posts &&
        posts.length > 0 &&
        posts.map((post: Post) => (
          <div
            className="bg-gradient-to-r from-gray-900 to-purple-900 max-w-sm rounded overflow-hidden mt-10 h-180 shadow-lg fcards"
            key={post._id}>
            <Link href={`${encodeURIComponent(post.slug)}`}>
              <Image
                src={`${
                  mode === "debug"
                    ? `${local}/${post.thumbnail}`
                    : post.thumbnail
                }`}
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
                    __html: truncateContent(post.content),
                  }}></div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Category;
