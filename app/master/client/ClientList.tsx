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

export default function ClientList() {
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

  };



  return (

    <>
        <div>
        dsdsds
      </div>

    </>



  );
}
