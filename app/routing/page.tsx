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
import CreateForm from "./CreateForm";

function RoutingLayout() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <TitlePage
        title="Create Order"
        description="The menu for creating an order is divided into two sections: Header and Detail Lines.
        Afterward, the order will be used to arrange trips in the next step."
      />

      <p>Routing</p>
    </>
  );
}

export default RoutingLayout;
