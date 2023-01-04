import type { NextPage } from 'next';
import Head from 'next/head';
import { useQuery } from 'react-query';
import axios from 'axios';

/**
 * 
 * @returns fetched data from the given URL
 */
const fetchData = async () => {
  try {
    const result = await axios.get('https://dummyjson.com/products');
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

const Home: NextPage = () => {
  const { isLoading, data, error, isError } = useQuery('products', fetchData);
  const products = data?.products;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>React Query Mini</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center">
        <div className="flex flex-col gap-y-4">
          {isLoading ? (
            <p>loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              <p className="text-2xl font-bold my-5">Products</p>
              {products.map((product: any) => (
                <div
                  key={product.id}
                  className="max-w-sm shadow-lg border p-4 border-gray-200 rounded-lg text-left">
                  <p className="text-lg font-semibold">
                    {product?.brand} {product?.title}
                  </p>
                  <p className="text-gray-700">{product?.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
