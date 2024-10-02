import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import NetWorthGraph from "./_partials/networth-graph";
import NetWorthStat from "./_partials/networth-stat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AssetGraph from "./_partials/asset-graph";
import AssetTable from "./_partials/asset-table";

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
              <TabsTrigger value="tab3">CashFlow</TabsTrigger>
              <TabsTrigger value="tab4">Funds</TabsTrigger>
            </TabsList>
          </CardHeader>
          <div>
            <CardContent>
              <TabsContent value="tab1" className="grid grid-cols-2 h-full">
                <AssetGraph className="col-span-1" />
                <AssetTable className="col-span-1" />
              </TabsContent>
              <TabsContent value="tab2">Liabilities</TabsContent>
              <TabsContent value="tab3">CashFlow</TabsContent>
              <TabsContent value="tab4">Funds</TabsContent>
            </CardContent>
          </div>
        </Tabs>
      </Card>
    </article>
  );
};

export default AccountPage;
