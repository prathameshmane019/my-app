"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Student = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push("/student/" + name);
  };
  return (
    <>
      <h1>This is student registration page</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("features/dashboard")}
      >
        Login
      </button>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Register
      </button>
    </>
  );
};

export default Student;
