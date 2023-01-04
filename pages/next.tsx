import { NextPage } from 'next';
import Link from 'next/link';

const Next: NextPage = () => {
  return (
    <div className="relative p-10 text-center">
      <Link href="/">
          <button className="fixed top-5 left-7 bg-green-400 shadow-lg rounded-full px-6 py-2 text-sm text-white hover:scale-105 transition-all duration-200 active:scale-100 active:bg-green-500 font-semibold ">
            Home
          </button>
        </Link>
      <p>Testing page for routing</p>
    </div>
  );
};

export default Next;