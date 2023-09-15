import StudentSideBar from "./sidebar/page";

export default function StudentLayout({ children }) {
  return (
    <div className="flex flex-row">
      <StudentSideBar />
      <div className="mx-3 my-3 content">{children}</div>
    </div>
  );
}
