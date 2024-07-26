import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Button from "@/components/button";
import Card from "@/components/card";
import { Product } from "../../public/types";
import { priceList, productList } from "../../public/dummy";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const [category, setCategory] = useState<'All' | 'Office Equipment' | 'Furniture'>('All');

  const getAllProducts = (): Product[] => {
    return [...productList[0].ATK, ...productList[0].FURNITURE];
  };

  const getFilteredProducts = (category: string): Product[] => {
    if (category === 'All') {
      return getAllProducts();
    } else if (category === 'Office Equipment') {
      return productList[0].ATK;
    } else if (category === 'Furniture') {
      return productList[0].FURNITURE;
    }
    return [];
  };

  const getPrice = (key: string): number => {
    const allPrices = [...priceList[0].ATK, ...priceList[0].FURNITURE];
    const product = allPrices.find((item) => item.key === key);
    return product ? product.value : 0;
  };

  const filteredProducts = getFilteredProducts(category);

  return (
    <main
      className={` ${inter.className}`}
    >
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Catalogue</h1>
        <div className="flex justify-center mb-8 space-x-4">
        <Button
          type="category"
          category="All"
          label="All"
          isSelected={category === 'All'}
          onClick={() => setCategory('All')}
        />
        <Button
          type="category"
          category="Office Equipment"
          label="Office Equipment"
          isSelected={category === 'Office Equipment'}
          onClick={() => setCategory('Office Equipment')}
        />
        <Button
          type="category"
          category="Furniture"
          label="Furniture"
          isSelected={category === 'Furniture'}
          onClick={() => setCategory('Furniture')}
        />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card
              key={product.key}
              name={product.value}
              price={getPrice(product.key)}
              onClick={() => {}}
            />
          ))}
        </div>

      </div>
    </main>
  );
}
