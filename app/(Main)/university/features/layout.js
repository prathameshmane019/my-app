import UniversitySideBar from "./sidebar/page";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-row">
      <UniversitySideBar />
      <div className="w-[85vw] ml-[18vw] mr-8 content">{children}</div>
    </div>
  );
}
