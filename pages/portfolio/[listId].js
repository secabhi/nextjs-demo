import { useRouter } from "next/router";

function ListPage() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>List page with Id {router.query.listId}</h1>
    </div>
  );
}

export default ListPage;
