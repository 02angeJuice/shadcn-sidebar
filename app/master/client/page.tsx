"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../components/Provider";
import TitlePage from "../../components/TitlePage";
import CreateForm from "./CreateForm";
import ClientList from "./ClientList";

export default function ClientMasterPage() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <TitlePage title="Client Master" description="Create client" />
      <Card className="mt-10 border-dashed">
        <CardContent>
          <CardHeader>
            {/* <CardTitle className="font-bold">{`Header`}</CardTitle>
            <CardDescription className="text-slate-300">
              Replace this with your content
            </CardDescription> */}
          </CardHeader>

          <CreateForm />
        </CardContent>
      </Card>

      <Card className="mt-10 border-dashed">
        <CardContent>
          <CardHeader></CardHeader>
          <ClientList />
        </CardContent>
      </Card>
    </>
  );
}
