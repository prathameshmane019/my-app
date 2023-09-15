import UniversitySideBar from "./sidebar/page";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-row">
      <UniversitySideBar />
      <div className="mx-3 my-3 content">{children}</div>
    </div>
  );
}
