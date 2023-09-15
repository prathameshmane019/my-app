import CollegeSideBar from "./sidebar/page";

export default function CollegeLayout({ children }) {
  return (
    <div className="flex flex-row">
      <CollegeSideBar />
      <div className="mx-3 my-3 content">{children}</div>
    </div>
  );
}
