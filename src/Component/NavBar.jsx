/* eslint-disable no-constant-condition */
import { useState } from "react";
import Link from "./Link";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [search,setSearch]=useState(false)

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
  ];

  return (
    <div className="flex items-center justify-between">

      <div className="flex gap-5 items-center">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <IoMdClose className="text-3xl font-bold"></IoMdClose>
        ) : (
          <IoIosMenu className="text-3xl font-bold"></IoIosMenu>
        )}
      </div>

      <h3 className="text-3xl font-bold">Logo</h3>
      </div>
      {open ? (
        <ul className="md:hidden absolute top-[80px] rounded-xl   bg-slate-200   text-black font-semibold ">
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      ) : (
        ""
          )}
          <ul className="hidden md:flex justify-center items-center md:bg-transparent md:text-white   font-semibold ">
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
      </ul>
      <div className="flex items-center gap-1 text-xl">
      <input
  className={`${search ? 'flex' : 'hidden'} text-black px-2 py-1 md:flex rounded-xl bg-gray-300`}
  type="text"
/>

        <i className="fa-solid fa-magnifying-glass" onClick={()=>setSearch(!search)}></i>
      </div>
    </div>
  );
};

export default NavBar;
