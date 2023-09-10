import MinistrySideBar from "./sidebar/page";



export default function MainLayout({ children }) {
  return (
   <div className="flex flex-row">
   <MinistrySideBar />
      <div className="">
        {children}
   </div></div>
     
  );
}
