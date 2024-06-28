"use client";

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
import { LoginFormSchema } from "@/lib/schema/Login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { createClient } from "@/utils/supabase/client";

function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // const onSubmit = async () => {
  //   setLoading(true);
  //   //* async loading simulation
  //   setTimeout(() => {
  //     toast("Login Success", {
  //       className: "bg-green-500",
  //       description: "Redirect to home page",
  //     });
  //     router.replace("/home");
  //     setLoading(false);
  //   }, 300);
  // };

  async function onSubmit(values: z.infer<typeof LoginFormSchema>) {
    const supabase = createClient();

    setLoading(true);
    console.log(values);
    // Handle form submission
    setLoading(false);

    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    // if (error) {
    //   console.log("error");
    // } else {
    //   console.log("ok");
    // }

    if (error) {
      toast("Login Failed", {
        className: "bg-red-500",
        description: "Check your email or password",
      });

      // return redirect("/login?message=Could not authenticate user");
      return router.replace("/");
    } else {
      toast("Login Success", {
        className: "bg-green-500",
        description: "Redirect to home page",
      });

      // return redirect("/login?message=Could not authenticate user");
      return router.replace("/home");
    }

    // return redirect("/protected");
  }

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email" {...field} />
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
                <Input
                  autoComplete=""
                  type="password"
                  placeholder="Enter Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button loading={loading} type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
