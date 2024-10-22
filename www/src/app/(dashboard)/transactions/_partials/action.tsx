import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React from "react";
import DeleteItem from "./delete-item";

const Action = () => {
  return (
    <SheetContent className="flex flex-col justify-between">
      <section>
        <SheetHeader>
          <SheetTitle>Edit transaction instance</SheetTitle>
          <SheetDescription>
            Fill in the details below to edit.
          </SheetDescription>
        </SheetHeader>

        <br />

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Label
            </Label>
            <Input id="name" value="Leenard Zarate" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Provider
            </Label>
            <Input id="username" value="@leenard" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Value
            </Label>
            <Input id="username" value="@leenard" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Type
            </Label>
            <Input id="username" value="@leenard" className="col-span-3" />
          </div>
        </div>
      </section>

      <SheetFooter>
        <div className="flex flex-row-reverse gap-3">
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
          <SheetClose asChild>
            <DeleteItem />
          </SheetClose>
        </div>
      </SheetFooter>
    </SheetContent>
  );
};

export default Action;
