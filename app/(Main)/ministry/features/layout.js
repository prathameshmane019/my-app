import MinistrySideBar from "./sidebar/page";

export default function MainLayout({ children }) {
  return (
    <div className="flex   ">
    <MinistrySideBar  />
    <div className=" content w-[85vw] ml-[18vw] mr-8">{children}</div>
    </div>
  );
}
