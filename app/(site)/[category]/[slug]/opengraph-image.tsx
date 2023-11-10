import axios from "axios";
import Image from "next/image";
import { ImageResponse } from "next/server";

const apk = process.env.NEXT_PUBLIC_API_KEY;
const apl = process.env.NEXT_PUBLIC_API_PARAMS;
const mode = process.env.NEXT_PUBLIC_ENV_STATE;
const local = process.env.NEXT_PUBLIC_API_URL;

const getData = async (category: string, slug: string): Promise<any> => {
  const url = process.env.NEXT_PUBLIC_API_URL;
  const api = `${url}/${category}/${slug}`;
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
  const post = await getData(params.category, params.slug);
  const imageurl = `${post.thumbnail}`;
  const apidate = `${post.updated}`;
  const fixdate = apidate.toString().slice(0, 19).replace("T", " @ ") + " UTC";
  return new ImageResponse(
    (
      <div>
        <Image
          src={`${mode === "debug" ? `${local}/${imageurl}` : imageurl}`}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          alt={post.title}
          width={519}
          height={354}
          priority
        />
        <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </p>
        <p>{fixdate}</p>
      </div>
    )
  );
}
