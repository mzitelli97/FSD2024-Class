import Image from "next/image";

export default async function CustomerDetail(prop) {
  // Ejemplos de deconstruccion de objectos
  let {a: x, ...z} = {a: 1, b: 2};
  console.log({x, z});
  let y = {a: 1, b: 2};
  console.log(y);

  // Sigue el componente
  console.log(prop);

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
        Usuario: {prop.params?.id}
      </main>
    </div>
  );
}
