import LeftSidebar from '@/Components/homepage/news/LeftSidebar';
import RightSidebar from '@/Components/homepage/news/RightSidebar';
import React from 'react';
import Image from "next/image";
import NewsCard from '@/Components/homepage/news/NewsCard';

async function GetCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data.data.news_category;
}

async function GetNewsByCategoryId(category_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
  const data = await res.json();
  return data.data;
}

const PagebyCategory = async ({ params }) => {
    const { id } = await params;
    const categories = await GetCategories();
  const news = await GetNewsByCategoryId(id);
    // console.log(news);   

    return (
        <div className="container grid my-15 mx-auto grid-cols-12 gap-4">
            <div className="col-span-3">
                <LeftSidebar activeId={id} categories={categories}></LeftSidebar>
            </div>
            <div className="bg-purple-100 text-3xl col-span-6">
                <div className="space-y-4">
                    {
                        news.map(n => {
                            return <NewsCard news={n} key={n._id}></NewsCard>
                        })
                    }
                </div>
            </div>
            <div className="font-bold text-3xl col-span-3">
                <RightSidebar></RightSidebar>
            </div>


        </div>
    );
};

export default PagebyCategory;