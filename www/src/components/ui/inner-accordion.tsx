"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const InnerAccordion = AccordionPrimitive.Root;

const InnerAccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
InnerAccordionItem.displayName = "InnerAccordionItem";

const InnerAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center gap-3 px-5 py-4 text-sm font-medium transition-all hover:bg-primary/10 [&[data-state=open]>svg]:rotate-90 bg-zinc-100",
          className
        )}
        {...props}
      >
        <ChevronRightIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
InnerAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const InnerAccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("p pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
InnerAccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  InnerAccordion,
  InnerAccordionItem,
  InnerAccordionTrigger,
  InnerAccordionContent,
};
