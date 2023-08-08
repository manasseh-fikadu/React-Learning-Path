// Import React and the BlogPost component
import React from "react";
import BlogPost from "../../../../components/BlogPost";

// Function to fetch a specific blog post by ID
async function getPost(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();
  return post;
}

// Component for the individual blog post page
const IndividualBlogPage = async ({ params: { id } }) => {
  // Fetch the specific blog post using the provided ID
  const post = await getPost(id);

  return (
    <div>
      {/* Render the BlogPost component with the fetched post */}
      <BlogPost post={post} />
    </div>
  );
};

// Export the IndividualBlogPage component as the default export
export default IndividualBlogPage;
