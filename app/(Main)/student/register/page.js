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
      
    </>
  );
};

export default Student;
