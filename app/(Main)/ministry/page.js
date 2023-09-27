"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";

const Ministry = () => {
  const router = useRouter();

  // const navigate = (name) => {
  //   router.push("/ministry/features" + name);
  // };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username,password);
    if (!username || !password) {
      alert("Title and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/ministry", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("college/features/dashboard");
      } else {
        throw new Error("Failed to create a user");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" mx-auto rounded-lg  m-[100px] shadow-md h-[60vh] w-[30vw] ">

     <div className="flex  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-stone-900">
            Sign in to your account
          </h2>
        
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                 onChange={(e) => setUsername(e.target.value)}
                 value={username}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                 onChange={(e) => setPassword(e.target.value)}
                 value={password}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
            <button
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        

        // onClick={() => navigate("/dashboard")}
      >
        Login
      </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
           Login Here {' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              
            </a>
          </p>
        </div>
      </div>
      
      
    </div>
  );
};

export default Ministry;
