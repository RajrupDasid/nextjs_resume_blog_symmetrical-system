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

const getData = async (slug: string): Promise<any> => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  const api = `${url}/api/blogs/${slug}`;
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
  const singlepost = await getData(params.slug);
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
  const { slug } = params;
  const post = await getData(slug);
  if (mode === "debug") {
    imageurl = `${local}/${post.thumbnail}`;
  } else {
    imageurl = `${post.thumbnail}`;
  }

  const apidate = `${post.updated}`;
  const fixdate = apidate.toString().slice(0, 19).replace("T", " @ ") + " UTC";
  return (
    <>
      <div className="blog-detail-container">
        <div className="left-column">
          <div className="header">
            <Image
              src={imageurl}
              alt="hello world"
              className="blog-header-image"
              width={640}
              height={400}
            />
          </div>
          <div className="blog-details">
            <h1 className="blog-title">{post.title}</h1>
            <h6>
              Last updated :- <span>{fixdate}</span>
            </h6>
            <div className="flex flex-wrap m-0">
              <ul className="flex flex-wrap">
                {post.tags.map((tag: any, index: any) => (
                  <li
                    className="tagsclass p-2 m-1  rounded border border-gray-300"
                    key={index}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="blog-description"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.content),
              }}></div>
          </div>
        </div>
        <div className="right-column">
          <div className="post-list">
            <h2>Post List</h2>
            {post.title}
            <div className="most-popular-posts">
              <h3>Most Popular Posts</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
