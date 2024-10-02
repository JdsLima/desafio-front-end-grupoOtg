import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const activeStyle =
  "block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white";
const normalStyle =
  "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white";

export const NavBar = () => {
  const route = useRouter();

  return (
    <nav className="w-full h-16 bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link href={"/"}>
                <Image
                  className="h-6 w-auto"
                  width={500}
                  height={200}
                  src="data:image/png;base64,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"
                  alt="Your Company"
                ></Image>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href={"/"}
                  className={route.asPath === "/" ? activeStyle : normalStyle}
                >
                  Blog posts
                </Link>
                <Link
                  href={"/admin"}
                  className={
                    route.asPath === "/admin" ? activeStyle : normalStyle
                  }
                >
                  Administração{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className={route.asPath === "/" ? activeStyle : normalStyle}
          >
            Blog posts
          </Link>
          <Link
            href="/admin"
            className={route.asPath === "/admin" ? activeStyle : normalStyle}
          >
            Administração
          </Link>
        </div>
      </div>
    </nav>
  );
};
