import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import NetWorthGraph from "./_partials/networth-graph";
import NetWorthStat from "./_partials/networth-stat";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
              <TabsContent value="tab1">Assets</TabsContent>
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
