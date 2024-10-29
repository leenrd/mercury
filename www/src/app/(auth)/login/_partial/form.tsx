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
import { useAuth } from "@/hooks/use-auth";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
});

const LoginForm = () => {
  const { loginMutation } = useAuth();
  const { toast } = useToast();
  const {
    mutateAsync: login,
    isPending: loginLoading,
    isError,
    failureReason: loginErrorMsg,
  } = loginMutation;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function submitLogin(data: z.infer<typeof formSchema>) {
    login(data);
    toast({
      title: "Logging in",
      description: "Please wait while we redirect you in.",
    });
  }

  return (
    <Form {...form}>
      {isError ? (
        <p className="text-red-500">
          {loginErrorMsg?.response?.data.message ??
            "An error occurred while logging in. Try again."}
        </p>
      ) : null}
      <form
        onSubmit={form.handleSubmit(submitLogin)}
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
          <Button type="submit" className="px-8" disabled={loginLoading}>
            {loginLoading ? <Loader className="h-4 animate-spin mr-1" /> : null}
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
