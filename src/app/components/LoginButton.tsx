import Link from "next/link";
import { BiLogIn } from "react-icons/bi";
function LoginButton() {
  return (
    <Link
      href="/api/auth/signin"
      className="flex items-center rounded-md hover:bg-blue-400 cursor-pointer space-x-2 sm:px-2 grow sm:grow-0 justify-center sm:justify-start py-2"
    >
      <BiLogIn />
      <span className="hidden sm:block">Login</span>
    </Link>
  );
}

export default LoginButton;
