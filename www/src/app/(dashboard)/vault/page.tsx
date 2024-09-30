import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import React from "react";
import AssetGraph from "./_partials/asset-graph";

const VaultPage = () => {
  return (
    <article className="">
      <Card>
        <CardHeader className="">
          <CardTitle className="text-xl">Summary</CardTitle>
        </CardHeader>

        <CardContent>
          <AssetGraph />
        </CardContent>
      </Card>

      <br />

      <Card>
        <CardHeader className="">
          <CardDescription>Search Account component [ ]</CardDescription>
          <CardTitle>Asset Vault</CardTitle>
        </CardHeader>

        <CardContent>Recursive Accordion</CardContent>
      </Card>
    </article>
  );
};

export default VaultPage;
