import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Registar = () => {
  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Register Your Info</CardTitle>
          <CardDescription>Register Your Info</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">username</Label>
                <Input
                  id="username"
                  type="username"
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input id="password" type="password" required />
                <Link
                  to="/LoginPage"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>

              <Button>Registar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registar;
