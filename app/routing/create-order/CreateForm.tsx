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
import { LoginFormSchema } from "@/lib/schema/Login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";

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

  const onSubmit = async () => {
    setLoading(true);
    //* async loading simulation
    setTimeout(() => {
      toast("Login Success", {
        className: "bg-green-500",
        description: "Redirect to home page",
      });
      router.replace("/home");
      setLoading(false);
    }, 300);
  };

  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "user@example.com",
      password: "user",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-4">
            <FormField
              control={form.control}
              name="client"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Client</FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value
                            ? clients.find(
                                (client) => client.value === field.value,
                              )?.label
                            : "Select Client"}
                          {/* <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
                          <ChevronsUpDown
                            size={15}
                            className="ml-2 h-4 w-4 shrink-0 opacity-50"
                          />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search Client..."
                          className="h-9"
                        />
                        <CommandEmpty>No client found.</CommandEmpty>
                        <CommandGroup>
                          {clients.map((client) => (
                            <CommandItem
                              value={client.label}
                              key={client.value}
                              onSelect={() => {
                                form.setValue("client", client.value);
                                setOpen(false);
                              }}
                            >
                              {client.label}
                              <Check
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  client.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </Command>
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-4">
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
            Save Order
          </div>
        </Button>
      </form>
    </Form>
  );
}

export default CreateForm;
