import { ProductType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const getData = async (category: string): Promise<ProductType[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/?cat=${category}`, {
    cache: "no-store", // không lưu cache, luôn lấy dữ liệu mới
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const products: ProductType[] = await getData(params.category);

  return (
    <div className="flex flex-wrap text-orange-500">
      {products.map((item: ProductType) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-orange-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-amber-200"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt={item.title} fill className="object-contain" />
            </div>
          )}

          <div className="flex items-center justify-between font-bold group">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-orange-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
