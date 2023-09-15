
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter;

  const navigate = (name) => {
    router.push(name);
  };
  return (
    <>
      <h1>This is minifddrtetrfstry login page</h1>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/features/university")}
      >
        Primary
      </button>
    </>
  );
}