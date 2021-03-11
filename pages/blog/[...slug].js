import { useRouter } from "next/router";
function BlogPage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>About BlogPage</h1>
    </div>
  );
}

export default BlogPage;
