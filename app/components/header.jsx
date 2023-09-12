"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };
  return (
    <div className="navbar bg-violet-800">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">ProjectHub</a>
      </div>
      <div className="flex-none">
        <div  className="" onClick={()=>navigate("/about")}>About
        </div>
        <div className="dropdown dropdown-end mx-3">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image height={50} width={50} src="/img/user1.jpg" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={()=>navigate("/ministry") }>
              <a className="justify-between">
                Ministry Login
                 </a>
            </li>
            <li>
              <a>University Login</a>
            </li>
            <li>
              <a>College Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
