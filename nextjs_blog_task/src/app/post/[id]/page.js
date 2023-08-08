// pages/post/[slug].js
import React from "react";
import BlogPost from "../../../../components/BlogPost";

async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();
  return post;
}

const IndividualBlogPage = async ({ params: { id } }) => {
  const post = await getPost(id);

  return (
    <div>
      <BlogPost post={post} />
    </div>
  );
};

export default IndividualBlogPage;
