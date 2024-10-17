"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { profileUpdateSchema } from "../_zod/schema";
import { z } from "zod";
import { useUpdateProfile } from "@/hooks/use-profile-update";

const UpdateForm = () => {
  const mutation = useUpdateProfile();
  const updateProfileForm = useForm<tUpdateProfileFormType>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
  });
  type tUpdateProfileFormType = z.infer<typeof profileUpdateSchema>;

  function handleUpdateProfileSubmit(values: tUpdateProfileFormType) {
    // upload to api.
    mutation.mutate(values);
    console.log("submitting: ", values);
  }

  return (
    <Form {...updateProfileForm}>
      <form
        onSubmit={updateProfileForm.handleSubmit(handleUpdateProfileSubmit)}
        className="flex flex-col gap-10 items-start p-5"
      >
        <FormField
          control={updateProfileForm.control}
          name="username"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="w-full">
          <section className="grid grid-cols-2 gap-7">
            <FormField
              control={updateProfileForm.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormDescription>At least 8 characters long.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={updateProfileForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormDescription>Re-type password.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
        </div>

        <div className="flex w-full justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateForm;
