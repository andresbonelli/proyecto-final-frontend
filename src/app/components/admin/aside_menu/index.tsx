import Link from "next/link";

export default function AsideMenu() {
  return (
    <aside className="w-1/6 hidden sm:flex flex-col justify-start gap-2 py-10 px-5 bg-white border-r">
      <Link
        href="/dashboard"
        className="text-lg font-MontserratBold text-gray-500 hover:bg-background p-2 rounded-md"
      >
        Dashboard
      </Link>
      <Link
        href="/dashboard/products"
        className="text-lg font-MontserratBold text-gray-500 hover:bg-background p-2 rounded-md"
      >
        Products
      </Link>
      <Link
        href="/dashboard/users"
        className="text-lg font-MontserratBold text-gray-500 hover:bg-background p-2 rounded-md"
      >
        Users
      </Link>
      <Link
        href="/dashboard/settings"
        className="text-lg font-MontserratBold text-gray-500 hover:bg-background p-2 rounded-md"
      >
        Settings
      </Link>
    </aside>
  );
}
