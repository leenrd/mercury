"use client";

import React, { useMemo } from "react";
import MainCard from "./_partials/main-card";
import SubCard from "./_partials/sub-card";
import SimilarCard from "./_partials/similar-card";
// import { useGetMarketNews } from "@/hooks/use-get-market-news";
const MarketPage = () => {
  // const { data: news, isError, isPending, isSuccess } = useGetMarketNews();
  const data = useMemo(() => {
    return [
      {
        id: 1,
        title: "Lorem ipsum dolor sit",
        image: "https://loremflickr.com/800/600/",
        date: "2021-09-01",
        category: "Business",
      },
      {
        id: 2,
        title: "Lorem ipsum dolor sit",
        image: "https://loremflickr.com/800/600/",
        date: "2021-09-01",
        category: "Business",
      },
      {
        id: 3,
        title: "Lorem ipsum dolor sit",
        image: "https://loremflickr.com/800/600/",
        date: "2021-09-01",
        category: "Business",
      },
      {
        id: 4,
        title: "Lorem ipsum dolor sit",
        image: "https://loremflickr.com/800/600/",
        date: "2021-09-01",
        category: "Business",
      },
      {
        id: 5,
        title: "Lorem ipsum dolor sit",
        image: "https://loremflickr.com/800/600/",
        date: "2021-09-01",
        category: "Business",
      },
    ];
  }, []);

  return (
    <article>
      <MainCard data={data[0]} />
      <br />

      <div className="grid grid-cols-2 gap-5">
        <SubCard data={[data[1], data[2]]} />
      </div>

      <br />

      <SimilarCard data={data.filter((x) => ![3, 1, 2].includes(x.id))} />
    </article>
  );
};

export default MarketPage;
