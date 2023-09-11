"use client";
import Link from "next/link";
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
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
