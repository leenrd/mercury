"use client";

import React from "react";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const EditSheet = () => {
  return (
    <SheetContent className="flex flex-col justify-between">
      <section>
        <SheetHeader>
          <SheetTitle>Add an account in vault</SheetTitle>
          <SheetDescription>
            Fill in the details below to add in the vault.
          </SheetDescription>
        </SheetHeader>

        <br />

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Label
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Provider
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Value
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Type
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
      </section>

      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Add account</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};

export default EditSheet;
