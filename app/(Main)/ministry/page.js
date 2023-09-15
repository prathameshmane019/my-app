"use client";
import { useRouter } from "next/navigation";
import React from "react";
<<<<<<< HEAD
import DashboardPage from "./login/dashboard/page";
=======
>>>>>>> a1f542501fbc9c2f465b86c1691b8790f5a2e2d7

const Ministry = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push("/ministry/features" + name);
  };
  return (
    <>
      <h1>This is minifddfstry login page</h1>
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
