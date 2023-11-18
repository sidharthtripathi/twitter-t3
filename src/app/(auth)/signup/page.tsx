import TwitterLogo from "@/app/components/TwitterLogo";
import RegisterForm from "@/app/components/RegisterForm";
import Link from "next/link";
export const metadata = {
  title: "Register",
  description: "Register page for twitter",
};
function page() {
  return (
    <section className="bg-black">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
        >
          <Link href="/">
            <TwitterLogo />
          </Link>
        </a>
        <div className="w-full rounded-lg shadow-xl shadow-slate-900 md:mt-0 sm:max-w-md xl:p-0 border border-slate-800 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
              Create Account
            </h1>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
