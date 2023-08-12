import Image from "next/image";
import {HeartIcon} from "@heroicons/react/24/solid"

export const Home = ({}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <section className="w-full">
        <h1 className="text-zinc-800 text-6xl">home <HeartIcon className="text-rose-600 w-8 h-8 inline" /></h1>
      </section>
    </main>
  );
};
export default Home;
