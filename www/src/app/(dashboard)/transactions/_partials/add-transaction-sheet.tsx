import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

const categories = [
  { label: "Food", value: "en" },
  { label: "Bills", value: "fr" },
  { label: "Entertainment", value: "de" },
  { label: "Work", value: "es" },
  { label: "Investment", value: "pt" },
  { label: "Utility", value: "ru" },
  { label: "Clothing", value: "ja" },
  { label: "Technology", value: "ko" },
] as const;

const AddTransactionSheet = () => {
  return (
    <SheetContent className="flex flex-col justify-between">
      <section>
        <SheetHeader>
          <SheetTitle>Add transaction</SheetTitle>
          <SheetDescription>
            Fill in the details below to add in the transactions.
          </SheetDescription>
        </SheetHeader>

        <br />

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Merchant
            </Label>
            <Input id="name" value="Leenard Zarate" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Amount
            </Label>
            <Input id="username" value="@leenard" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Account
            </Label>
            <Input id="username" value="@leenard" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Category
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn("justify-between rounded-md w-[246.5px]")}
                >
                  Select category
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput
                    placeholder="Search category..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>No category found.</CommandEmpty>
                    <CommandGroup>
                      {categories.map((c) => (
                        <CommandItem value={c.label} key={c.value}>
                          {c.label}
                          <CheckIcon className={cn("ml-auto h-4 w-4")} />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </section>

      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Add transaction</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
};

export default AddTransactionSheet;
