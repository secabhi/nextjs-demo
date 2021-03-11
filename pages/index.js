import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  const onNavigate = (e) => {
    router.push({
      pathname: "/portfolio/[listId]",
      query: { listId: "1234" },
    });
  };
  return (
    <div className="container">
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
          <ul>
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>
          </ul>
          <button className="" onClick={onNavigate}>
            Navigate
          </button>
        </h1>
      </main>
    </div>
  );
}

export default Home;
