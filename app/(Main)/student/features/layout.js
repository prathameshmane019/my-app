import StudentSideBar from "./sidebar/page";

export default function StudentLayout({ children }) {
  return (
    <div className="flex flex-row">
      <StudentSideBar />
      <div className=" w-[85vw] ml-[18vw] mr-8 content">{children}</div>
    </div>
  );
}
