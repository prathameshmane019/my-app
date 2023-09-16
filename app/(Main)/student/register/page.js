"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from 'react';


const Student = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push("/student/" + name);
  };
  const [selectedState, setSelectedState] = useState('');




  return (
    <>
    <div class="shadow-inner ..."></div>

<form className="w-full max-w-5xl ml-20 my-14">
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3">
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email ID</span>

  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

  
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Username</span>
    
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

  
</div>
</div>
<div className="w-full md:w-1/2 px-3">
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>

  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

  
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Resent Password</span>
   

  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

  
</div>
</div>
<div className="w-full md:w-1/2 px-3 mt-2">
<select className="select select-primary w-full max-w-xs">
  <option disabled selected>States</option>
  
  
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
</select>
<select className="select select-primary w-full max-w-xs mt-3">
  <option disabled selected> select University</option>

  <option>Kolhapur University</option>
  <option>Solapur University</option>
</select>
</div>
<div className="w-full md:w-1/2 px-3 mt-2">
<select className="select select-primary w-full max-w-xs mt-3">
  <option disabled selected> select College</option>

  <option>Walchand Institute of Technology - [WIT], Solapur</option>
  <option>Brahmdevdada Mane Institute of Technology - [BMIT], Solapur</option>
  

</select>

<select className="select select-primary w-full max-w-xs mt-3">
  <option disabled selected>Academic year</option>
  <option>First year</option>
  <option>Second year</option>
  <option>Third year</option>
  <option>final year</option>
</select>

</div>
<div className="w-full md:w-1/2 px-3 mt-2">
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Male</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
  </label>
</div>

<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Female</span> 
    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
  </label>
</div>


            <button
        className="... ring-2 ring-blue-500/[.55]flex w-full justify-center rounded-md bg-indigo-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        

        onClick={() => navigate("/dashboard")}
      >
        Login
      </button>
      
      </div>
      </div>
      </form>
    
    </>
  );
};

export default Student;
