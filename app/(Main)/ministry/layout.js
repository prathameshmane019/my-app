import MinistrySideBar from "./sidebar/page";
import "./ministry.css";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-row">
      <MinistrySideBar />
      <div className="mx-3 my-3 content">{children}</div>
    </div>
  );
}
