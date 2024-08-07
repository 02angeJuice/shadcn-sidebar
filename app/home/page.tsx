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
import { ThemeContext } from "../components/Provider";
import TitlePage from "../components/TitlePage";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

async function HomePage() {
  const theme = useContext(ThemeContext);

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/");
  }

  return (
    <>
      <TitlePage
        title="Home"
        description="Discover a new songs from various muscian"
      />
      <Card className="mt-10 border-dashed">
        <CardContent>
          <center>
            <Image
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
            </Button>
          </center>
        </CardContent>
      </Card>
    </>
  );
}

export default HomePage;
