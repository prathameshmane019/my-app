import CollegeSideBar from "./sidebar/page";

export default function CollegeLayout({ children }) {
  return (
    <div className="flex flex-row">
      <CollegeSideBar  />
      <div className="w-[85vw] ml-[18vw] mr-8 content">{children}</div>
    </div>
  );
}
