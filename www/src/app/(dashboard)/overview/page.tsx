import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import NetWorthGraph from "./_partials/networth-graph";
import NetWorthStat from "./_partials/networth-stat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssetGraph from "./_partials/asset-graph";
import AssetTable from "./_partials/asset-table";
import LiabilityGraph from "./_partials/liability-graph";
import LiabilityTable from "./_partials/liability-table";

const AccountPage = () => {
  return (
    <article>
      <Card>
        <NetWorthStat />
        <NetWorthGraph />
      </Card>

      <br />

      <Card>
        <Tabs defaultValue="tab1">
          <CardHeader>
            <TabsList>
              <TabsTrigger value="tab1">Assets</TabsTrigger>
              <TabsTrigger value="tab2">Liabilities</TabsTrigger>
            </TabsList>
          </CardHeader>
          <div>
            <CardContent>
              <TabsContent
                value="tab1"
                className="grid grid-cols-2 px-16 h-full"
              >
                <AssetGraph className="col-span-1" />
                <AssetTable className="col-span-1" />
              </TabsContent>
              <TabsContent
                value="tab2"
                className="grid grid-cols-2 px-16 h-full"
              >
                <LiabilityGraph className="col-span-1" />
                <LiabilityTable className="col-span-1" />
              </TabsContent>
            </CardContent>
          </div>
        </Tabs>
      </Card>
    </article>
  );
};

export default AccountPage;
