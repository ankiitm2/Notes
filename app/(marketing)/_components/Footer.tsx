import React from "react";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex p-6 w-full bg-background z-50 items-center">
      <Logo />
      <div className="flex md:ml-auto w-full justify-between md:justify-end text-muted-foreground">
        <Button variant="ghost" size="sm">
          {" "}
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          {" "}
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
export default Footer;
