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
              <SheetTrigger>
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
            <CardDescription>% in Assets</CardDescription>
            <CardDescription>Value</CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <Accordion type="multiple">
            {/* bank */}
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex text-nowrap">
                  Bank Accounts <span className="text-primary/50">• 3</span>
                </div>
                <div className="grid grid-cols-2 w-full">
                  <p className="col-span-1 flex justify-end">40%</p>
                  <p className="col-span-1 flex justify-end">₱700.79K</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                {/* -- */}
                <InnerAccordion type="multiple">
                  <InnerAccordionItem value="item-1">
                    <InnerAccordionTrigger>
                      Digital Banks{" "}
                      <span className="text-primary/50">
                        • 500K total value
                      </span>
                    </InnerAccordionTrigger>
                    <InnerAccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </InnerAccordionContent>
                  </InnerAccordionItem>
                  <InnerAccordionItem value="item-2">
                    <InnerAccordionTrigger>
                      Traditional Banks{" "}
                      <span className="text-primary/50">
                        • 100K total value
                      </span>
                    </InnerAccordionTrigger>
                    <InnerAccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </InnerAccordionContent>
                  </InnerAccordionItem>
                  <InnerAccordionItem value="item-3">
                    <InnerAccordionTrigger>
                      Savings Account{" "}
                      <span className="text-primary/50">
                        • 100K total value
                      </span>
                    </InnerAccordionTrigger>
                    <InnerAccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </InnerAccordionContent>
                  </InnerAccordionItem>
                </InnerAccordion>
                {/* -- */}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Cash</AccordionTrigger>
              <AccordionContent>
                {/*  */}
                <InnerAccordion type="multiple">
                  <InnerAccordionItem value="item-1">
                    <InnerAccordionTrigger>
                      Digital Wallet{" "}
                      <span className="text-primary/50">
                        • 500K total value
                      </span>
                    </InnerAccordionTrigger>
                    <InnerAccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </InnerAccordionContent>
                  </InnerAccordionItem>
                  <InnerAccordionItem value="item-2">
                    <InnerAccordionTrigger>
                      At Hand{" "}
                      <span className="text-primary/50">• 50K total value</span>
                    </InnerAccordionTrigger>
                    <InnerAccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </InnerAccordionContent>
                  </InnerAccordionItem>
                  <InnerAccordionItem value="item-3">
                    <InnerAccordionTrigger>
                      Emergency Fund{" "}
                      <span className="text-primary/50">• 50K total value</span>
                    </InnerAccordionTrigger>
                    <InnerAccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </InnerAccordionContent>
                  </InnerAccordionItem>
                </InnerAccordion>
                {/*  */}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Fixed Income</AccordionTrigger>
              <AccordionContent>
                <InnerAccordion type="multiple">
                  <InnerAccordionItem value="item-1">
                    <InnerAccordionTrigger>
                      Company 1{" "}
                      <span className="text-primary/50">• 23K total value</span>
                    </InnerAccordionTrigger>
                    <InnerAccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </InnerAccordionContent>
                  </InnerAccordionItem>
                </InnerAccordion>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Stock Portfolios</AccordionTrigger>
              <AccordionContent>
                <InnerAccordion type="multiple">
                  <InnerAccordionItem value="item-1">
                    <InnerAccordionTrigger>
                      COL Financial{" "}
                      <span className="text-primary/50">
                        • 500K total value
                      </span>
                    </InnerAccordionTrigger>
                    <InnerAccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </InnerAccordionContent>
                  </InnerAccordionItem>
                </InnerAccordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </article>
  );
};

export default VaultPage;
