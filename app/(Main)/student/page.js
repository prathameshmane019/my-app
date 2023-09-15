"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Student = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push("/student/features" + name);
  };
  return (
    <>
      <h1>This is student login page</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/dashboard")}
      >
        Primary
      </button>
    </>
  );
};

export default Student;
