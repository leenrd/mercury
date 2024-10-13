import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";

interface MainCardProps {
  data: {
    [key: string]: any;
  };
}

const MainCard = ({ data }: MainCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Featured</CardTitle>
        <CardDescription>Today&apos;s trending topic</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          className="rounded-lg cursor-pointer brightness-75"
          src={data.image_url}
          alt="news_pic"
          width={1200}
          height={500}
        />
        <div className="absolute bottom-6 pl-10 text-white">
          <h3 className="text-6xl font-extrabold cursor-pointer hover:underline">
            {data.title}
          </h3>
          <p>
            {data.description} • {data.published_at}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MainCard;
