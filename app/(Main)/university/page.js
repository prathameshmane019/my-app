"use client";
import { useRouter } from "next/navigation";
import React from "react";

const University = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push("/university/features" + name);
  };
  return (
    <>
      <h1>This is university login page</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/dashboard")}
      >
        Primary
      </button>
    </>
  );
};

export default University;
