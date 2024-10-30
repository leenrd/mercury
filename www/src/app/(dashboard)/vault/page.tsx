import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";
import AssetGraph from "./_partials/asset-graph";
import {
  InnerAccordion,
  InnerAccordionContent,
  InnerAccordionItem,
  InnerAccordionTrigger,
} from "@/components/ui/inner-accordion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import EditSheet from "./_partials/edit-sheet";
import Vault from "./_partials/vault";

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
          <CardTitle className="flex justify-between">
            <div className="text-xl">Vault</div>

            <Sheet>
              <SheetTrigger asChild>
                <Button size={"icon"} variant={"outline"}>
                  <Plus size={15} />
                </Button>
              </SheetTrigger>
              <EditSheet />
            </Sheet>
          </CardTitle>

          {/*  */}
          <div className="px-12 pt-8 flex justify-between">
            <CardDescription>Asset Class</CardDescription>
            <CardDescription> </CardDescription>
            <CardDescription>Value</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <Vault />
        </CardContent>
      </Card>
    </article>
  );
};

export default VaultPage;
