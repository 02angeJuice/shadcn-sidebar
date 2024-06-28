"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  ChevronDownIcon,
  Home,
  ListVideo,
  Menu,
  Mic2,
  Music,
  Play,
  RadioIcon,
  SquareStack,
  User,
  FileLineChart,
  Truck,
  ShieldAlert,
  Database,
  Save,
  Check,
  ChevronsUpDown,
} from "lucide-react";
import { Input } from "@/components/ui/input";
// import { LoginFormSchema } from "@/lib/schema/Login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { ClientCreateFormSchema } from "@/lib/schema/Client";
import { createClient } from "@/utils/supabase/client";

const clients = [
  { label: "ICI", value: "ici" },
  { label: "AHOC", value: "ahoc" },
  { label: "CHON", value: "chon" },
] as const;

function CreateForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<Status | null>(null);

  const addClient = async (values: z.infer<typeof ClientCreateFormSchema>) => {
    // "use server";

    const supabase = createClient();

    console.log("=== Data", values);

    const { data, error } = await supabase
      .from("client_master")
      .insert([
        {
          client_code: values.client_code,
          name: values.name,
          description: values.description,
        },
      ])
      .select();

    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }

    // setLoading(true);
    // //* async loading simulation
    // setTimeout(() => {
    //   toast("Login Success", {
    //     className: "bg-green-500",
    //     description: "Redirect to home page",
    //   });
    //   router.replace("/home");
    //   setLoading(false);
    // }, 300);
  };

  const form = useForm<z.infer<typeof ClientCreateFormSchema>>({
    resolver: zodResolver(ClientCreateFormSchema),
    defaultValues: {
      client_code: "",
      name: "",
      description: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(addClient)} className="space-y-5">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-2">
            <FormField
              control={form.control}
              name="client_code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Code:</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete=""
                      type="text"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Name:</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete=""
                      type="text"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client Description:</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete=""
                      type="text"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button loading={loading} type="submit">
          <div className="flex items-center">
            <div className="w-6">
              <Save size={15} className="mr-2" />
            </div>
            Add
          </div>
        </Button>
      </form>
    </Form>
  );
}

export default CreateForm;
