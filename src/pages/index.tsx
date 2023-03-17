import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between overflow-clip overscroll-none bg-gray-300 h-screen-ios">
      <Head>
        <title>lttstore.com feed</title>
        <meta
          name="description"
          content="A feed of products from lttstore.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div />
      <main className="flex flex-col items-center justify-center px-3">
        <div className="flex flex-col gap-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-400 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
          <h1 className="mb-4 text-5xl font-extrabold uppercase">
            <a href="https://lttstore.com">lttstore.com</a> Feed
          </h1>

          <a href="https://lttstorefeed.vercel.app/api/feed">
            <div className="flex flex-row items-center">
              <p className="text-xl font-bold uppercase text-transparent">
                All Products Feed
              </p>
              <div className="svg-gradient ml-1" />
            </div>
          </a>
          <a href="https://lttstorefeed.vercel.app/api/feed">
            <div className="flex flex-row items-center">
              <p className="text-xl font-bold uppercase text-transparent">
                Gear Products Feed
              </p>
              <div className="svg-gradient ml-1" />
            </div>
          </a>
          <a href="https://lttstorefeed.vercel.app/api/feed">
            <div className="flex flex-row items-center">
              <p className="text-xl font-bold uppercase text-transparent">
                Clothing Products Feed
              </p>
              <div className="svg-gradient ml-1" />
            </div>
          </a>
          <a href="https://lttstorefeed.vercel.app/api/feed">
            <div className="flex flex-row items-center">
              <p className="text-xl font-bold uppercase text-transparent">
                The Newsletter Feed
              </p>
              <div className="svg-gradient ml-1" />
            </div>
          </a>
        </div>
      </main>
      <footer className=" flex flex-col items-center justify-center text-center text-xs text-gray-400">
        <p>Made with ❤️</p>
        <p>
          This app is not affiliated with or endorsed by Linus Media Group Inc.,
          Creator Warehouse Inc., or Floatplane Inc. All content and trademarks
          belong to their respective owners.
        </p>
      </footer>
    </div>
  );
};

export default Home;
