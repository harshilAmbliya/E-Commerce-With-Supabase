"use client";

import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
type Props = {};

const GithubLoginButton = (props: Props) => {
  return (
    <Button
      onClick={() =>
        signIn("github", { callbackUrl: "http://localhost:3000" })
      }
    >
      GithubLoginButton
    </Button>
  );
};

export default GithubLoginButton;
