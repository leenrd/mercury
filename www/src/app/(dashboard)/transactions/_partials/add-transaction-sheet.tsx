import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAccounts } from "@/hooks/use-accounts";
import { useAddTransaction } from "@/hooks/use-transactions";
import { Loader2 } from "lucide-react";

const categories = [
  { label: "Food", value: "Food" },
  { label: "Bills", value: "Bills" },
  { label: "Entertainment", value: "Entertainment" },
  { label: "Work", value: "Work" },
  { label: "Investment", value: "Investment" },
  { label: "Utility", value: "Utility" },
  { label: "Clothing", value: "Clothing" },
  { label: "Technology", value: "Technology" },
] as const;

const formSchema = z.object({
  merchant: z.string().min(3).max(20),
  amount: z.coerce.number(),
  accountId: z.string(),
  category: z.string(),
});

const AddTransactionSheet = () => {
  const { toast } = useToast();
  const { data: accounts } = useGetAccounts();
  const { mutateAsync: createTransaction, isPending } = useAddTransaction();

  type AccountT = {
    id: string;
    label: string;
    type: string;
    provider: string;
    value: number;
    userId: string;
    createdAt: string;
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      createTransaction(values);
      toast({
        title: "Form submitted",
        description: "Transaction added successfully.",
      });
    } catch (error) {
      console.error("Form submission error", error);
      toast({
        title: "Form submission error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }
  return (
    <SheetContent className="flex flex-col justify-between">
      <section>
        <SheetHeader>
          <SheetTitle>Add transaction</SheetTitle>
          <SheetDescription>
            Fill in the details below to add in the transactions.
          </SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10"
          >
            <FormField
              control={form.control}
              name="merchant"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Merchant</FormLabel>
                  <FormControl>
                    <Input placeholder="McDonalds" type="text" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input placeholder="100" type="number" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="accountId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select account" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {accounts?.map((acc: AccountT) => (
                        <SelectItem value={acc.id} key={acc.id}>
                          {acc.provider}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((categ) => (
                        <SelectItem value={categ.value} key={categ.value}>
                          {categ.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SheetFooter>
              {/* <SheetClose asChild> */}
              <Button type="submit" disabled={isPending}>
                {isPending ? <Loader2 className="animate-spin" /> : null}
                Add transaction
              </Button>
              {/* </SheetClose> */}
            </SheetFooter>
          </form>
        </Form>
      </section>
    </SheetContent>
  );
};

export default AddTransactionSheet;
