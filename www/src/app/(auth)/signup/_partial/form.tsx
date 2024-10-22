"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSignUp } from "@/hooks/use-signup";
import { Loader } from "lucide-react";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
});

const SignUpForm = () => {
  const {
    mutateAsync: createAccountAndLogIn,
    isPending,
    isError,
    isSuccess,
    failureReason,
  } = useSignUp();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function createAccount(data: z.infer<typeof formSchema>) {
    createAccountAndLogIn(data);
    console.log(data);
  }

  return (
    <Form {...form}>
      {isError ? (
        <p className="text-red-500">
          {failureReason?.response?.data.message ??
            "An error occurred while signing up. Try again."}
        </p>
      ) : null}
      <form
        onSubmit={form.handleSubmit(createAccount)}
        className="space-y-5 w-[20vw] md:w-[30vw]"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Leenard" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="8 characters" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <br />

        <div className="text-center">
          <Button type="submit" className="px-11" disabled={isPending}>
            {isPending ? <Loader className="h-4 animate-spin mr-1" /> : null}
            Sign up
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
