import Image from "next/image";
import Link from "next/link";
import { SyncButton } from "./sync";

// export const revalidate = 1;

export const metadata = {
    'title': 'Customers',
    'description': "Pagina de clientes, blabla"
}

const cache = {
  "https://jsonplaceholder.typicode.com/users": {
    'value': [{id: 1}, {id: 2}],
    'status': 'ok'
  }
}

const tags = {
  "listUsers": "https://jsonplaceholder.typicode.com/users"
}

function myFetch(url, revalidateTimer) {
  if (cache.url?.status === 'ok'){
    return cache.url?.value;
  }
  else if (cache.url?.status === 'stale') {
    let ret = fetch(url);
    delay(staleCache, revalidateTimer);
    cache[url].value = ret;
    cache[url].status = 'ok';
    return ret;
  }
  else {
    let ret = fetch(url);
    delay(staleCache, revalidateTimer);
    cache[url].value = ret;
    cache[url].status = 'ok';
    return ret;
  }
}

function staleCache(url) {
  cache[url].status = 'stale';
}

function myRevalidateTag(tag) {
  const url = tags[tag];
  cache[url] = null;
}

export default async function Customer() {
  // const data = await fetch("https://jsonplaceholder.typicode.com/users", {next: {revalidate: 5}});
  const data = await fetch("https://jsonplaceholder.typicode.com/users", {next: {tags: ["listUsers"]}});
  const users = await data.json();
  console.log(users);
  return (
    <div className="bg-green-600 grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <SyncButton/>
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {users.map(user => {
            return (
            <li className="mb-2" key={user.id}>
              <Link href={`customer/${user.id}`}>
                {user.id} - {user.name} - {user.username}
              </Link>
            </li>)
          })}
        </ol>
      </main>
    </div>
  );
}
