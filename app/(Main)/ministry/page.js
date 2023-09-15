"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Ministry = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push("/ministry/features" + name);
  };
  return (
    <>
      <h1>This is ministry login page</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/dashboard")}
      >
        Primary
      </button>
    </>
  );
};

export default Ministry;
