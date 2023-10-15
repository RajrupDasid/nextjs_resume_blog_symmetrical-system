import axios from "axios";
import Image from "next/image";
import { ImageResponse } from "next/server";

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
export const size = {
  width: 900,
  height: 450,
};

function removeTags(str: string) {
  if (str === null || str === "") return "";
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
}

export default async function og({ params }: { params: Params }) {
  const post = await getData(params.slug);
  const imageurl = `${post.thumbnail}`;
  const apidate = `${post.updated}`;
  const fixdate = apidate.toString().slice(0, 19).replace("T", " @ ") + " UTC";
  return new ImageResponse(
    (
      <div>
        <Image src={imageurl} alt={post.title} />
        <p>{post.title}</p>
        <p>{fixdate}</p>
      </div>
    )
  );
}
