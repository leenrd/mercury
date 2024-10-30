"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  InnerAccordion,
  InnerAccordionItem,
  InnerAccordionTrigger,
  InnerAccordionContent,
} from "@/components/ui/inner-accordion";
import { useGetAssets, useGetVault } from "@/hooks/use-assets";
import React from "react";

const Vault = () => {
  const { data: assetTypes, isLoading, isError } = useGetAssets();
  const {
    data: vault,
    isLoading: vaultLoading,
    isError: vaultError,
  } = useGetVault();

  if (isLoading || vaultLoading) return <div>Loading...</div>;
  if (isError || vaultError) return <div>Error</div>;

  return (
    <Accordion type="multiple">
      {vault.map((asset: any) => (
        <AccordionItem value={asset.id} key={asset.id + asset.type}>
          <AccordionTrigger>
            <div className="flex justify-between w-full text-nowrap">
              {asset.type} <span className="text-primary/50">•</span>
            </div>
            <p className="col-span-1 flex justify-end">₱{asset.value}</p>
          </AccordionTrigger>
          <AccordionContent>
            {/* -- */}
            <InnerAccordion type="multiple">
              <InnerAccordionItem value="item-1">
                <InnerAccordionTrigger>
                  Digital Banks{" "}
                  <span className="text-primary/50">• 500K total value</span>
                </InnerAccordionTrigger>
                <InnerAccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </InnerAccordionContent>
              </InnerAccordionItem>
            </InnerAccordion>
            {/* -- */}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Vault;
