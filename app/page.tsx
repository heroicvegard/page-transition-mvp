import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
      <header className="bg-slate-600 p-4">Header</header>

      <main className="flex-1 bg-slate-400 p-4">Main content</main>

      <footer className="bg-slate-600 p-4">Footer</footer>
    </>
  );
};

export default Page;
