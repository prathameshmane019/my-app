import MLogin from "./m-login";
import Projects from "./projects";

export default function MinistryPage() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between ">
      <MLogin />
      <Projects/>
      </main>
    )
  }
  