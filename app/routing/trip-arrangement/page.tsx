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

function DashboardPage() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <TitlePage
        title="Create Order"
        description="The menu for creating an order is divided into two sections: Header and Detail Lines.
        Afterward, the order will be used to arrange trips in the next step."
      />
      <Card className="mt-10 border-dashed">
        <CardContent>
          <CardHeader>
            <CardTitle className="font-bold">{`Header`}</CardTitle>
            <CardDescription className="text-slate-300">
              Replace this with your content
            </CardDescription>
          </CardHeader>

          <CreateForm />

          <center>
            {/* <Image
              className="m-10"
              width={300}
              height={300}
              priority
              src={
                theme?.theme === "dark"
                  ? "/team_engineering_white.svg"
                  : "/team_engineering.svg"
              }
              alt="illustration.svg"
            />


            <CardHeader>
              <CardTitle className="font-bold">{`That's It`}</CardTitle>
              <CardDescription className="text-slate-300">
                Replace this with your content
              </CardDescription>
            </CardHeader>

            <Button asChild>
              <a href="https://ui.shadcn.com/">Shadcn UI</a>
            </Button> */}
          </center>
        </CardContent>
      </Card>
    </>
  );
}

export default DashboardPage;
