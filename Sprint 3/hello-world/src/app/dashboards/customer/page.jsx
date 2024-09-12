import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

export const metadata = {
    'title': 'Customers'
}

export default async function Customer() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  return (
    <div className="bg-green-600 grid grid-rows-[20px_1fr_20px] items-center justify-items-center  p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
