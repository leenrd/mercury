import { Card, CardHeader, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";

interface SubCardProps {
  data: {
    [key: string]: any;
  }[];
}

const SubCard = ({ data }: SubCardProps) => {
  return (
    <>
      {" "}
      <Card className="col-span-1">
        <CardHeader></CardHeader>
        <CardContent className="relative">
          <Image
            className="rounded-lg cursor-pointer brightness-75"
            src={"https://picsum.photos/1200/500"}
            alt="news_pic"
            width={1200}
            height={500}
          />
          <div className="absolute bottom-6 pl-5 pb-3 text-white">
            <h3 className="text-4xl font-extrabold  cursor-pointer hover:underline">
              News Title
            </h3>
            <p>News Description</p>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-1">
        <CardHeader></CardHeader>
        <CardContent className="relative">
          <Image
            className="rounded-lg cursor-pointer brightness-75"
            src={"https://picsum.photos/1200/500"}
            alt="news_pic"
            width={1200}
            height={500}
          />
          <div className="absolute bottom-6 pl-5 pb-3 text-white">
            <h3 className="text-4xl font-extrabold cursor-pointer hover:underline">
              News Title
            </h3>
            <p>News Description</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default SubCard;
