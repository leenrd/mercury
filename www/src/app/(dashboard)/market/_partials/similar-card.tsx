import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface SimilarCardProps {
  data: {
    [key: string]: any;
  }[];
}

const SimilarCard = ({ data }: SimilarCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">More News</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="flex items-start justify-between">
                  <div>
                    <h1 className="text-3xl font-semibold cursor-pointer hover:underline">
                      {item.title}
                    </h1>
                    <p>{item.category}</p>
                    <p>{item.description}</p>
                  </div>
                  <Image
                    className="rounded-lg brightness-75"
                    src={"https://picsum.photos/1200/500"}
                    alt="news_pic"
                    width={400}
                    height={200}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SimilarCard;
