import DOMPurify from "isomorphic-dompurify";
import axios from "axios";
import "@/public/assets/css/BlogDetail.scss";
import Image from "next/image";
import { Metadata } from "next";

const apk = process.env.NEXT_PUBLIC_API_KEY;
const apl = process.env.NEXT_PUBLIC_API_PARAMS;
const mode = process.env.NEXT_PUBLIC_ENV_STATE;
const local = process.env.NEXT_PUBLIC_API_URL;
let imageurl = "";

const getData = async (category: string, slug: string): Promise<any> => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  const api = `${url}/api/blogs/${category}/${slug}`;
  const res = await axios.get(api, {
    timeout: 90000000,
    headers: {
      Authorization: `${apl} ${apk}`,
    },
  });
  return res.data;
};
interface Params {
  slug: string;
  category: string;
}
function removeTags(str: string) {
  if (str === null || str === "") return "";
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const singlepost = await getData(params.category, params.slug);
  const clean = removeTags(singlepost.content);
  const desc: string = clean.substring(0, 150);
  if (!singlepost) {
    return {
      title: "Not found",
      description: "This page is not found",
    };
  }
  return {
    title: singlepost.title,
    description: desc,
    alternates: {
      canonical: `/${desc}`,
      languages: {
        "en-US": `en-US/${desc}`,
      },
    },
  };
}

const SinglePage = async ({
  params,
}: {
  params: Params;
}): Promise<JSX.Element> => {
  const { slug, category } = params;
  const post = await getData(category, slug);
  if (mode === "debug") {
    imageurl = `${local}/${post.thumbnail}`;
  } else {
    imageurl = `${post.thumbnail}`;
  }

  const apidate = `${post.updated}`;
  const fixdate = apidate.toString().slice(0, 19).replace("T", " @ ") + " UTC";
  return (
    <>
      <div className="min-h-screen">
        <div className="mx-auto max-w-screen-xl p-4">
          <div className="flex">
            <div className="w-full md:w-3/4 pr-4">
              <div className="header">
                <Image
                  src={imageurl}
                  alt="hello world"
                  className="blog-header-image rounded-lg shadow-2xl"
                  width={740}
                  height={580}
                  placeholder="blur"
                  blurDataURL={imageurl}
                  quality={100}
                  priority
                />
              </div>
              <div className="blog-details mt-10">
                <h1 className="text-3xl font-semibold text-white">
                  {post.title}
                </h1>
                <h6 className="text-gray-600 mt-6">
                  Last updated: <span>{fixdate}</span>
                </h6>
                <div className="flex flex-wrap mt-6">
                  <ul className="flex flex-wrap mt-6">
                    {post.tags.map((tag: any, index: any) => (
                      <li
                        className="bg-gradient-to-r from-blue-500 to-purple-600 tagsclass p-2 m-1 rounded border border-gray-300 text-white"
                        key={index}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="blog-description mt-10 text-white"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.content),
                  }}
                />
              </div>
            </div>
            <div className="hidden md:w-1/4 md:flex">
              {" "}
              {/* Decrease the right side width */}
              <div className="post-list">
                <div className="most-popular-posts">
                  <div className="border-l pl-4">
                    {/* <h3 className="text-xl font-semibold text-white">
                Most Popular Posts
              </h3> */}
                    {/* Add your list of popular posts here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
