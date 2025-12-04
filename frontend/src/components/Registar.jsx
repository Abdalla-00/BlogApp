import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";

const Registar = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { user } = useUser();
  useEffect(() => {
    if (user) navigate("/");
  }, [user]);

  const handleInputChange = (event) => {
    console.log(event);
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const { data } = await axios.post("/api/user/register-User", formData);
      toast.success("success register");
      console.log(data);
      setLoading(false);
      navigate("/");
    } catch (e) {
      setLoading(false);
      toast.error(e.response.data);
      console.error(e);
    }
  };

  return (
    <div className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>Register Your Info</CardTitle>
          <CardDescription>Register Your Info</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">username</Label>
                <Input
                  id="username"
                  type="username"
                  placeholder="Enter your username"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  onChange={handleInputChange}
                  id="password"
                  type="password"
                  required
                />
                <Link
                  to="/LoginPage"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>

              <Button>{loading ? "Registaring..." : "Registar"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registar;
