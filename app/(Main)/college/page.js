"use client";
import { useRouter } from "next/navigation";
import React from "react";

const College = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push("/college/features" + name);
  };
  return (
    <>
      <h1>This is college login page</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/dashboard")}
      >
        Primary
      </button>
    </>
  );
};

export default College;
