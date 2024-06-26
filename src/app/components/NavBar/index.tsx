import Image from "next/image";
import Link from "next/link";
import SignInButton from "../SignInButton";

const containerClass = "flex items-center justify-between gap-4";

export default function NavBar() {
  return (
    <nav className="w-full bg-white px-6 py-4 flex justify-between items-center fixed">
      <div className={containerClass}>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={90} height={20} />
        </Link>
      </div>

      <div className={`w-1/3 ${containerClass}`}>
        <div className="w-full rounded-full border-2 border-gray-200 overflow-hidden flex">
          <input className="w-full bg-transparent px-4 py-2 outline-none" type="text" placeholder="Search" />
          <button className="bg-gray-100 px-4 py-2 border-l-2 border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>

        <button className="w-10 h-12 flex justify-center items-center">
          <Image className="w-10 h-10" src="/icons/microphone.png" alt="Microphone" width={36} height={36} />
        </button>
      </div>

      <div className={containerClass}>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
        </button>
        <SignInButton />
      </div>
    </nav>
  );
}