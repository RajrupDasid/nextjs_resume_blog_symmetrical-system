import { error } from "console";
import DOMPurify from "isomorphic-dompurify";
import axios from "axios";
// import "@/assets/css/BlogDetail.scss";
import "@/public/assets/css/BlogDetail.scss";
import Image from "next/image";
const apk = process.env.NEXT_PUBLIC_API_KEY;
const apl = process.env.NEXT_PUBLIC_API_PARAMS;

const headers = {
  Authorization: `${apl}  ${apk}`,
};

// await fetch("http://example.com/api/endpoint", {
//   method: "GET", // or "POST" or other HTTP methods
//   headers: headers,
// });
const getData = async (slug: string): Promise<any> => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const api = `${url}${slug}`;
  const res = await axios.get(api, {
    headers: {
      Authorization: `${apl} ${apk}`,
    },
  });
  return res.data;
};

interface Params {
  slug: string;
}
const truncateContent = (content: string) => {
  // Display between 40 and 50 characters
  if (content.length <= 100000) {
    return content;
  }
  return content.slice(0, 9000) + "...";
};

const SinglePage = async ({
  params,
}: {
  params: Params;
}): Promise<JSX.Element> => {
  const { slug } = params;
  const post = await getData(slug);
  const api = process.env.NEXT_PUBLIC_IMAGE_API_URL;
  const imageurl = `${api}/${post.thumbnail}`;
  const clean = DOMPurify.sanitize(post.content);
  return (
    <>
      <div className="blog-detail-container">
        <div className="left-column">
          <div className="header">
            <Image
              src={imageurl}
              alt="Blog Header"
              width={370}
              height={300}
              className="blog-header-image"
            />
          </div>
          <div className="blog-details">
            <h1 className="blog-title">{post.title}</h1>
            {/* <p className="blog-description">{clean}</p> */}
            <div
              className="blog-description"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(truncateContent(post.content)),
              }}></div>
            <div className="comment-box">
              <h2>Comments</h2>
              <div className="comment-list">
                {/* {comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <p className="comment-text">{comment}</p>
                    <p className="comment-author">Author: John Doe</p>
                  </div>
                ))} */}
              </div>
              <div className="comment-form">
                <h3>Add a Comment</h3>
                <textarea
                  rows={4}
                  placeholder="Write your comment here..."
                  // value=
                ></textarea>
                <button>Submit Comment</button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="post-list">
            <h2>Post List</h2>
            <div className="most-popular-posts">
              <h3>Most Popular Posts</h3>
              {/* Add popular posts here */}
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
