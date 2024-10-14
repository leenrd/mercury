"use client";

import React, { useMemo } from "react";
import MainCard from "./_partials/main-card";
import SubCard from "./_partials/sub-card";
import SimilarCard from "./_partials/similar-card";
import { useGetMarketNews } from "@/services/_market-news-provider";

const MarketPage = () => {
  const { data: news, isError, isPending, isSuccess } = useGetMarketNews();
  if (isSuccess) {
    console.log(news.data);
  } else if (isError) {
    console.log("Error fetching data");
  }

  return (
    <article>
      {/* <MainCard data={news.data[0]} /> */}
      <br />

      <div className="grid grid-cols-2 gap-5">
        {/* <SubCard data={[data[1], data[2]]} /> */}
      </div>

      <br />

      {/* <SimilarCard data={data.filter((x) => ![3, 1, 2].includes(x.id))} /> */}
    </article>
  );
};

export default MarketPage;
