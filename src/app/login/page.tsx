"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Button, Input, Link, Spacer } from "@nextui-org/react";
import { EyeFilledIcon } from "../../../public/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../../public/EyeSlashFilledIcon";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [isVisible, setIsVisible] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Success Login");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Login"}</h1>
      <hr />

      <Input
        radius="full"
        isRequired
        type="email"
        label="Email"
        labelPlacement="outside"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="max-w-xs"
      />

      <Spacer y={2} />

      <Input
        className="max-w-xs"
        radius="full"
        isRequired
        type={isVisible ? "text" : "password"}
        label="Password"
        labelPlacement="outside"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <Spacer y={5} />

      <Button className="bg-success" onClick={onLogin} radius="full" size="md">
        {buttonDisabled ? "Input" : "Login"}
      </Button>

      <Spacer y={1} />

      <Link href="/signup" underline="hover" size="sm">
        Register Here
      </Link>
    </div>
  );
}
