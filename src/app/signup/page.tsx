"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button, Input, Link, Spacer } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../../../public/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../../../public/EyeFilledIcon";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [isVisible, setIsVisible] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading ? "Processing" : "Signup"}</h1>
      <hr />
      <Input
        className="max-w-xs"
        radius="full"
        isRequired
        type="text"
        label="Username"
        variant="bordered"
        labelPlacement="outside"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />

      <Spacer y={2} />

      <Input
        className="max-w-xs"
        radius="full"
        isRequired
        type="email"
        label="Email"
        variant="bordered"
        labelPlacement="outside"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />

      <Spacer y={2} />

      <Input
        className="max-w-xs"
        radius="full"
        isRequired
        type={isVisible ? "text" : "password"}
        label="Password"
        variant="bordered"
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

      <Spacer y={2} />

      <Button className="bg-success" onClick={onSignup} radius="full" size="md">
        {buttonDisabled ? "Input" : "Signup"}
      </Button>

      <Spacer y={1} />

      <Link href="/login" underline="hover" size="sm">
        Already have an account?
      </Link>
    </div>
  );
}
