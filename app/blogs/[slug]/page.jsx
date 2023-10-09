import { error } from "console";

const getData = async (slug) => {
  const res = await fetch(`http://127.0.0.1:8000/api/blogs/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.log(error);
  }
  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;
  const data = await getData(slug);
  console.log(data);
};
export default SinglePage;