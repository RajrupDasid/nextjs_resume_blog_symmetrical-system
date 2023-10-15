import DOMPurify from "isomorphic-dompurify";
import axios from "axios";
import "@/public/assets/css/BlogDetail.scss";
import Image from "next/image";
import { Metadata } from "next";

const apk = process.env.NEXT_PUBLIC_API_KEY;
const apl = process.env.NEXT_PUBLIC_API_PARAMS;

const headers = {
  Authorization: `${apl}  ${apk}`,
};

const getData = async (slug: string): Promise<any> => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const api = `${url}${slug}`;
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
      canonical: `/blogs/${desc}`,
      languages: {
        "en-US": `en-US/blogs/${desc}`,
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
  const imageurl = `${post.thumbnail}`;
  const clean = DOMPurify.sanitize(post.content);
  const apidate = `${post.updated}`;
  const fixdate = apidate.toString().slice(0, 19).replace("T", " @ ") + " UTC";
  return (
    <>
      <div className="blog-detail-container">
        <div className="left-column">
          <div className="header">
            <Image
              src={imageurl}
              alt="Blog Header"
              className="blog-header-image"
              width={1200}
              height={400}
            />
          </div>
          <div className="blog-details">
            <h1 className="blog-title">{post.title}</h1>
            <h6>
              Last updated :- <span>{fixdate}</span>
            </h6>
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
            <div className="topics">
              <h3>Topics</h3>
              {/* Add topics here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
